import mongoose from 'mongoose';
 

const transcriptSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: 'Video Id is required'
    },
    startTime: {
        type: Number,
        default: 0
    },
    endTime: {
        type: Number,
        defauult: 0
    },
    type: {
        type: String,
        required: 'Type is required'
    },
    transcript: {
        type: String,
        required: 'Transcript is required'
    },
    meaning: {
        type: String,
        required: 'Meaning is required'
    }
});

export default mongoose.model('Transcript', transcriptSchema);