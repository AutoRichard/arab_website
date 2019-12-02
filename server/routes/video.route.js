import express from 'express';
import authCtrl from '../controllers/auth.controller';
import videoCtrl from '../controllers/video.controller';


const router = express.Router();

router.route('/api/video')
    .get(videoCtrl.list)
    .post(authCtrl.requireSignin, videoCtrl.create);


router.route('/api/video/:videoId')
    .get(videoCtrl.read)
    .put(authCtrl.requireSignin, videoCtrl.update)
    .delete(authCtrl.requireSignin, videoCtrl.remove);


router.route('/api/videoThumbnail/:videoId')
    .get(videoCtrl.thumbnail);

router.route('/api/videoDialect')
    .post(videoCtrl.videoByDialect);

router.route('/api/searchVideo')
    .get(videoCtrl.videoSearch)


router.param('videoId', videoCtrl.videoByID);


export default router;