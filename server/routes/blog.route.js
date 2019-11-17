import express from 'express';
import authCtrl from '../controllers/auth.controller';
import blogCtrl from '../controllers/blog.controller';

const router = express.Router();


//craete and list blog
router.route('/api/blog')
  .get(authCtrl.requireSignin, blogCtrl.list)
  .post(authCtrl.requireSignin, authCtrl.hasAuthorization, blogCtrl.create);

//single blog, update, and delete
router.route('/api/blog/:blogId')
  .get(authCtrl.requireSignin, blogCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, blogCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, blogCtrl.remove);

//comment to a single blog and delete
router.route('/api/comment')
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, blogCtrl._postComment)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, blogCtrl._deleteComment)

//reply to comment on single blog and delete
router.route('/api/replycomment')
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, blogCtrl._replyComment)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, blogCtrl._replyDeleteComment); 

//find specific blog photo
router.route('/api/blogPhoto/:blogId')
  .get(authCtrl.requireSignin, blogCtrl.photo);

//find specific blog
router.param('blogId', blogCtrl.blogByID);

export default router;