import config from '../config';
import app from './app';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, (err) => {
    if(err){        
        console.log(err);
    }
    console.info('Server started on porst:', config.port);
});