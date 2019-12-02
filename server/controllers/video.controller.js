import _ from 'lodash';
import errorHandler from './../helpers/dbErrorHandler';
import Video from '../models/video.model';
import formidable from 'formidable';
import fs from 'fs';


//save {videoId, thumbnail, dialect, rating, videolTitle, level}
const create = (req, res, next) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: "Photo could not be uploaded"
            });
        }

        var videoModel = new Video(fields);
        if (files.thumbnail) {
            videoModel.thumbnail.data = fs.readFileSync(files.thumbnail.path);
            videoModel.thumbnail.contentType = files.thumbnail.type;
        }

        videoModel.save(function (err) {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                });
            } else {
                return res.status(200).json({
                    message: "Video created"
                });
            }
        });
    });



}

//return {videoId, dialect, rating, videolTitle, level}
const list = (req, res) => {
    Video.find((err, video) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(video);
    }).select('youtubeId dialect rating videoTitle level');
}

//return from video table {:videoId}
const videoByID = (req, res, next, id) => {
    Video.findById(id)
        .exec((err, video) => {
            if (err || !video) {
                return res.status('400').json({
                    error: "Video not found"
                });
            }
            req.details = video;
            next();
        });
}

//return {thumbnail}
const thumbnail = (req, res) => {
    res.set("Content-Type", req.details.thumbnail.contentType);
    return res.send(req.details.thumbnail.data);
}

//save {videoId, thumbnail, dialect, rating, videolTitle, level}
const update = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Photo could not be uploaded"
            });
        }

        var video = req.details;
        video = _.extend(video, fields);
        video.updated = Date.now();

        if (files.thumbnail) {
            video.thumbnail.data = fs.readFileSync(files.thumbnail.path);
            video.thumbnail.contentType = files.thumbnail.type;
        }

        video.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                });
            }
            res.json(video);
        });
    });

}

//return single video
const read = (req, res) => {
    req.details.thumbnail = undefined;
    return res.json(req.details);
}

//delete video
const remove = (req, res, next) => {
    let video = req.details;
    video.remove((err, deletedVideo) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(deletedVideo);
    })
}

//video by dialect
const videoByDialect = (req, res) => {
    let dialect = req.body.dialect;

    Video.find({ "dialect": dialect })
        .exec((err, dialect) => {
            if(err || !dialect){
                return res.status(400).json({
                    error: "Video not found"
                });
            }

            res.json(dialect);
        });
}

//video search
const videoSearch = (req, res) => {
    
}

export default {
    create, list, videoByID, thumbnail, update, read, remove, videoByDialect
}