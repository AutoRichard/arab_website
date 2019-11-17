import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    text: {
        type: String,
        required: 'Article is required'
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    author: {
        type: String,
        required: 'Author is required',
        default: "anonymous"
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
    }
});


export default mongoose.model('Blog', BlogSchema); 