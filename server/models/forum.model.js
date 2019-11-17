import mongoose from 'mongoose';

const ForumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    text: {
        type: String,
        required: 'Article is required'
    }, 
    comments: [
        {
            text: String,
            created: { type: Date, default: Date.now },
            postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
            replyComment: [
                {
                    text: String,
                    created: { type: Date, default: Date.now },
                    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
                }
            ]
        }
    ],
    createDate: {
        type: Date,
        default: Date.now
    },
    category : {
        type: String,
        required: 'Category is required'
    },
    postedBy : {
        type: mongoose.Schema.ObjectId, ref: 'User'
    }
});


export default mongoose.model('Forum', ForumSchema);