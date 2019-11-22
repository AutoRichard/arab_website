import _ from 'lodash';
import errorHandler from './../helpers/dbErrorHandler';
import Blog from '../models/blog.model';
import formidable from 'formidable';
import fs from 'fs';


//save {title, text, photo, author, --comment-- & -createDate-} 
const create = (req, res, next) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Photo could not be uploaded"
            });
        }
        var blogModel = new Blog(fields);
        if (files.photo) {
            blogModel.photo.data = fs.readFileSync(files.photo.path);
            blogModel.photo.contentType = files.photo.type;
        }

        blogModel.save(function (err) {
            if (err) {
                return res.status(400).json({
                    error: 'Blog Creation Failed'
                });
            } else {
                return res.status(200).json({
                    message: 'BLog Created'
                });
            }
        })

    });




}

//return {photo}
const photo = (req, res) => {
    res.set("Content-Type", req.details.photo.contentType);
    return res.send(req.details.photo.data);
}

//return {title text author and _id}
const list = (req, res) => {

    Blog.find((err, blog) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(blog);
    }).select('title text author');
}

//return from blog table {:blogId}
const blogByID = (req, res, next, id) => {
    Blog.findById(id)
        .populate('comments.replyComment.postedBy', '_id name')
        .populate('comments.postedBy', '_id name')
        .exec((err, blog) => {
            if (err || !blog) return res.status('400').json({
                error: "BLog not found"
            });
            req.details = blog;
            next();
        });
}

//update {title, text, photo, author, --comment-- & -createDate-}
const update = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(400).json({
                error: "Photo could not be uploaded"
            });
        }
        var blog = req.details;
        blog = _.extend(blog, fields);
        blog.updated = Date.now();
        if (files.photo) {
            blog.photo.data = fs.readFileSync(files.photo.path);
            blog.photo.contentType = files.photo.type;
        }

        blog.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                });
            }
            res.json(blog);
        });
    });

}

//return single blog 
const read = (req, res) => {
    req.details.photo = undefined;
    return res.json(req.details);
}

//delete blog
const remove = (req, res, next) => {
    let blog = req.details;
    blog.remove((err, deletedBlog) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(deletedBlog);
    })
}

//update {comment, userId, blogId}
const _postComment = (req, res) => {

    let comment = {}
    comment.text = req.body.comment;
    comment.postedBy = req.body.userId;

    Blog.findByIdAndUpdate(req.body.blogId, { $push: { comments: comment } }, { new: true })
        .populate('comments.postedBy', '_id name')
        .select('title text author comments createDate')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        });
}

//delete {commentId and blogId}
const _deleteComment = (req, res) => {
    let commentId = req.body.commentId;


    Blog.findByIdAndUpdate(req.body.blogId, { $pull: { comments: { _id: commentId } } }, { new: true })
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        })
}

//reply {commentId, comment, userId}
const _replyComment = (req, res) => {
    let comment = {}
    comment.text = req.body.comment;
    comment.postedBy = req.body.userId;

    Blog.findOneAndUpdate({ "comments._id": req.body.commentId }, { $push: { "comments.$.replyComment": comment } }, { safe: true, upsert: true, new: true })
        .populate('comments.replyComment.postedBy', '_id name')
        .populate('comments.postedBy', '_id name')
        .select('title text author comments createDate')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        })
}

//delete {replyId}
const _replyDeleteComment = (req, res) => {
    let replycommentId = req.body.replyId;

    Blog.findOneAndUpdate({ "comments.replyComment._id": replycommentId }, { $pull: { "comments.$.replyComment": { _id: replycommentId } } }, { safe: true, upsert: true, new: true })
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        })
}

export default {
    create, list, photo, blogByID, update, read, remove, _postComment, _deleteComment, _replyComment, _replyDeleteComment
}