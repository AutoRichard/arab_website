import _ from 'lodash';
import errorHandler from './../helpers/dbErrorHandler';
import formidable from 'formidable';
import Forum from '../models/forum.model';
import fs from 'fs';

/*
function paginate(pageNumber, nPerPage){
    db.forum.find().skip((pageNumber-1)*nPerPage).limit(nPerPage)
}
*/

//creat: title, text, category, postedBy(userId), --comment-- 
const create = (req, res, next) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Photo could not be uploaded"
            });
        }

        let forumModel = new Forum(fields);
        if (files.photo) {
            forumModel.photo.data = fs.readFileSync(files.photo.path);
            forumModel.photo.contentType = files.photo.type;
        }

        forumModel.save(function (err) {
            if (err) {
                return res.status(500).json({
                    error: 'Forum Creation Failed'
                });
            } else {
                return res.status(200).json({
                    message: 'Forum Created'
                });
            }
        })
    });
}

//list all forum
const list = (req, res) => {

    Forum.find((err, forum) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(forum);
    }).populate('postedBy', '_id name').select('title text postedBy category');
}

//return specific forum
const forumByID = (req, res, next, id) => {
    Forum.findById(id)
        .populate('postedBy', '_id name')
        .exec((err, forum) => {
            if (err || !forum) return res.status('400').json({
                error: "Forum not found"
            });
            req.details = forum;
            next();
        });
}

//update: title, text, category, postedBy(userId)
const update = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Photo could not be uploaded"
            });
        }

        let forum = req.details;
        forum = _.extend(forum, fields);
        forum.updated = Date.now();

        if (files.photo) {
            forum.photo.data = fs.readFileSync(files.photo.path);
            forum.photo.contentType = files.photo.type;
        }

        forum.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                });
            }
            res.json(forum);
        });

    });

}

const photo = (req, res) => {
    res.set("Content-Type", "req.details.photo.contentType");
    res.send(res.details.photo.data);
}

//return specific forum
const read = (req, res) => {
    req.details.photo = undefined;
    return res.json(req.details);
}

//extension from blogId
const remove = (req, res, next) => {
    let forum = req.details;
    forum.remove((err, deletedForum) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(deletedForum);
    })
}

//list all category
const listCategory = (req, res) => {
    Forum.distinct('category', {}, (err, forum) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(forum);
    });
}

//forum by category {category}
const listForumByCategory = (req, res) => {
    Forum.find({ "category": req.body.category })
        .populate('postedBy', '_id name')
        .populate('comments.postedBy', '_id name')
        .populate('comments.replyComment.postedBy', '_id name')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        });
}

//forum by  user {userId}
const listForumByUser = (req, res) => {
    Forum.find({ "postedBy": req.body.userId })
        .populate('postedBy', '_id name')
        .populate('comments.postedBy', '_id name')
        .populate('comments.replyComment.postedBy', '_id name')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        });
}

//comment, userId, forumId
const _postMessage = (req, res) => {

    let comment = {}
    comment.text = req.body.comment;
    comment.postedBy = req.body.userId;

    Forum.findByIdAndUpdate(req.body.forumId, { $push: { comments: comment } }, { new: true })
        .populate('comments.postedBy', '_id name')
        .populate('postedBy', '_id name')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        })
}

//commentId and forumgId
const _deleteMessage = (req, res) => {
    let commentId = req.body.commentId;

    Forum.findByIdAndUpdate(req.body.forumId, { $pull: { comments: { _id: commentId } } }, { new: true })
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        })
}

//commentId, userId, comment
const _replyMessage = (req, res) => {
    let comment = {}
    comment.text = req.body.comment;
    comment.postedBy = req.body.userId;

    Forum.findOneAndUpdate({ "comments._id": req.body.commentId }, { $push: { "comments.$.replyComment": comment } }, { safe: true, upsert: true, new: true })
        .populate('comments.replyComment.postedBy', '_id name')
        .populate('comments.postedBy', '_id name')
        .populate('postedBy', '_id name')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result);
        })
}

//replycommentId
const _replyDeleteMessage = (req, res) => {
    let replycommentId = req.body.replyId;

    Forum.findOneAndUpdate({ "comments.replyComment._id": replycommentId }, { $pull: { "comments.$.replyComment": { _id: replycommentId } } }, { safe: true, upsert: true, new: true })
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
    create, list, photo, forumByID, update, read, remove, _postMessage, _deleteMessage, _replyMessage, _replyDeleteMessage, listCategory, listForumByCategory, listForumByUser
}