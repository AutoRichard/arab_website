import config from '../config';
import app from './app';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise
const uri = "mongodb+srv://richard01:seun08167739200@richard01-xsh4r.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri)

//mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${uri}`)
})

app.listen(config.port, (err) => {
    if(err){        
        console.log(err);
    }
    console.info('Server started on porst:', config.port);
});

