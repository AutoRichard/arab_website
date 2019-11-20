import express from 'express';
import authCtrl from '../controllers/auth.controller';
import forumCtrl from '../controllers/forum.controller';

const router = express.Router();

//create new forum and list all
router.route('/api/forum')
  .get(authCtrl.requireSignin, forumCtrl.list)
  .post(authCtrl.requireSignin, forumCtrl.create);

//read specific forum, update and delete
router.route('/api/forum/:forumId')
  .get(authCtrl.requireSignin, forumCtrl.read)
  .put(authCtrl.requireSignin, forumCtrl.update)
  .delete(authCtrl.requireSignin, forumCtrl.remove);

//comment and delete comment
router.route('/api/message')
  .put(authCtrl.requireSignin, forumCtrl._postMessage)
  .delete(authCtrl.requireSignin, forumCtrl._deleteMessage)

//reply to a specific comment and delete reply
router.route('/api/replymessage')
  .put(authCtrl.requireSignin, forumCtrl._replyMessage)
  .delete(authCtrl.requireSignin, forumCtrl._replyDeleteMessage);

//return all category
router.route('/api/categories')
  .get(authCtrl.requireSignin, forumCtrl.listCategory);

//return based on category
router.route('/api/category')
  .post(authCtrl.requireSignin, forumCtrl.listForumByCategory);

router.route('/api/userForum')
  .post(authCtrl.requireSignin, forumCtrl.listForumByUser);

router.route('/api/forumPhoto/:blogId')
  .get(authCtrl.requireSignin, forumCtrl.photo);


//fetch specific forum
router.param('forumId', forumCtrl.forumByID);

export default router;