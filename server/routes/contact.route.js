import express from 'express';
import authCtrl from '../controllers/auth.controller';
import contactCtrl from '../controllers/contact.controller';


const router = express.Router();

router.route('/api/contact')
    .get(contactCtrl.list)
    .post(contactCtrl.create);

router.route('/api/contact/:contactsId')
    .get(contactCtrl.read)
    .delete(authCtrl.requireSignin, contactCtrl.remove);

router.param('contactsId', contactCtrl.contactByID);

export default router;