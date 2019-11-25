import express from 'express';
import authCtrl from '../controllers/auth.controller';
import transcriptCtrl from '../controllers/transcription.controller';


const router = express.Router();

router.route('/api/transcript')
    .get(authCtrl.requireSignin, transcriptCtrl.list)
    .post(authCtrl.requireSignin, transcriptCtrl.create);


router.route('/api/transcript/:transcriptId')
    .get(authCtrl.requireSignin, transcriptCtrl.read)
    .put(authCtrl.requireSignin, transcriptCtrl.update)
    .delete(authCtrl.requireSignin, transcriptCtrl.remove);

router.param('transcriptId', transcriptCtrl.transcriptByID);

export default router;