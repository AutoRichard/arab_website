import _ from 'lodash';
import errorHandler from './../helpers/dbErrorHandler';
import Transcript from '../models/transcription.model';
import formidable from 'formidable';

//save {videoId, startTime, endTime, type, transcript, meaning}
const create = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Transcription Creation Failed"
            });
        }

        var transcriptModel = new Transcript(fields);

        transcriptModel.save(function (err) {
            if (err) {
                return res.status(400).json({
                    error: "Transcription Creation Failed"
                });
            } else {
                return res.status(200).json({
                    message: "Transcription Created"
                });
            }
        });
    });
}

//return list {videoId, startTime, endTime, type, transcript, meaning}
const list = (req, res) => {
    Transcript.find((err, transcript) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(transcript);
    }).populate('videoId', '_id videoTitle');
}

//return transcript by {transcriptId}
const transcriptByID = (req, res, next, id) => {
    Transcript.findById(id)
        .exec((err, transcript) => {
            if (err || !transcript) {
                return res.status(400).json({
                    error: "Transcript not found"
                });
            }

            req.details = transcript;

            next();
        });
}

//return single transcript
const read = (req, res, next) => {
    return res.json(req.details);
}

//update {videoId, startTime, endTime, type, transcript, meaning}
const update = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Transcript could not be uploaded"
            });
        }

        var transcript = req.details;
        transcript = _.extend(transcript, fields);
        transcript.updated = Date.now();

        transcript.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                });
            }
            res.json(result);
        });
    });
}

//removve {transcript}
const remove = (req, res, next) => {
    let video = req.details;
    video.remove((err, deletedTranscript) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(deletedTranscript);
    });
}

const transcriptByVideoId = (req, res) => {
    
    let videoId = req.body.videoId;
    let type = req.body.type;

    Transcript.find({ "videoId": videoId, "type": type })
        .populate('videoId', '_id videoTitle')
        .exec((err, transcript) => {
            if (err || !transcript) {
                return res.status(400).json({
                    error: "Transcript not found"
                });
            }
            res.json(transcript);
        });
}

export default {
    create, list, transcriptByID, read, update, remove, transcriptByVideoId
}