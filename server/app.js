import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route'; 
import blogRoutes from './routes/blog.route';
import forumRoutes from './routes/forum.route';
import videoRoutes from './routes/video.route';
import transcriptRoutes from './routes/transcription.route';
import contactRoutes from './routes/contact.route';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/', blogRoutes);
app.use('/', forumRoutes);
app.use('/', videoRoutes);
app.use('/', transcriptRoutes);
app.use('/', contactRoutes);
/*app.get('/', (req, res) => {
  console.log(1);
});*/

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }
});

export default app;