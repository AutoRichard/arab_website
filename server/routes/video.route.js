import express from 'express';
import authCtrl from '../controllers/auth.controller';
import videoCtrl from '../controllers/video.controller';


const router = express.Router(); 

router.route('/api/video')
    .get(authCtrl.requireSignin, videoCtrl.list)
    .post(authCtrl.requireSignin, videoCtrl.create);


router.route('/api/video/:videoId')
    .get(authCtrl.requireSignin, videoCtrl.read)
    .put(authCtrl.requireSignin, videoCtrl.update)
    .delete(authCtrl.requireSignin, videoCtrl.remove);


router.route('/api/videoThumbnail/:videoId')
    .get(videoCtrl.thumbnail);


router.param('videoId', videoCtrl.videoByID);


export default router;