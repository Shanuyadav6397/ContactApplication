import { Contact } from "../schema/contactSchema.js";

async function findContact(parameters) {
  try {
    const response = await Contact.findOne({ ...parameters });
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function createContact(contactDeatils) {
  try {
    const newContact = await Contact.create(contactDeatils);
    return newContact;
  } catch (error) {
    console.error(error);
  }
}

export { findContact, createContact };
