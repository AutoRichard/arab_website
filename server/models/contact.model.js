import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
      },
      email: {
        type: String,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
      },
      comment: {
          type: String,
          trim: true,
          required: 'Comment is required'
      }
});

export default mongoose.model('Contact', contactSchema);