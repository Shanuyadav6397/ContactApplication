import express from 'express';
import { createContact } from '../controllers/contactController.js';

const contactRouter = express.Router();

contactRouter.post('/add', createContact);

export { contactRouter }