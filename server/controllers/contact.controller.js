import Contact from '../models/contact.model';
import _ from 'lodash';
import errorHandler from './../helpers/dbErrorHandler';


const create = (req, res) => {
    const contact = new Contact(req.body);

    contact.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }

        res.status(200).json({
            success: "Message submitted"
        });
    });
}

const list = (req, res) => {
    Contact.find((err, contact) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(contact);
    })
}

const contactByID = (req, res, next, id) => {
    Contact.findById(id)
        .exec((err, contact) => {
            if (err || !contact) {
                return res.status(400).json({
                    error: "Contact not found"
                });
            }
            req.details = contact;
            next();
        });
}

const read = (req, res) => {
    return res.json(req.details);
}

const remove = (req, res) => {
    let contact = req.details;
    contact.remove((err, deletedContact) => {
        if(err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }

        res.json(deletedContact);
    });
}


export default {
    create, list, contactByID, read, remove
}