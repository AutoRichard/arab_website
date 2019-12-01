import express from 'express';
import authCtrl from '../controllers/auth.controller';
import transcriptCtrl from '../controllers/transcription.controller';


const router = express.Router();

router.route('/api/transcript')
    .get(transcriptCtrl.list)
    .post(authCtrl.requireSignin, transcriptCtrl.create);

router.route('/api/video/transcript')
    .post(transcriptCtrl.transcriptByVideoId);


router.route('/api/transcript/:transcriptId')
    .get(transcriptCtrl.read)
    .put(authCtrl.requireSignin, transcriptCtrl.update)
    .delete(authCtrl.requireSignin, transcriptCtrl.remove);

router.param('transcriptId', transcriptCtrl.transcriptByID);

export default router;