import mongoose from 'mongoose';
 
const videoSchema = new mongoose.Schema({
    youtubeVideoId: {
        type: String,
        required: 'Youtube Video Id is required'
    },
    thumbnail: {
        data: Buffer,
        contentType: String
    },
    dialect: {
        type: String,
        required: 'Dialect is required'
    },
    rating: {
        type: Number,
        default: 0
    },
    videoTitle: {
        type: String,
        required: 'Video Title is required'
    },
    level: {
        type: String,
        required: 'Level is required'
    }
});


export default mongoose.model('Video', videoSchema);