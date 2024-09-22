import { createContact, findContact } from "../repository/contactRepository.js";

async function addContact(contactDeatils){
  // steps to add contact in database
  // 1. find the contact is already present in the database if present then return the contact already present
     const findContactByEmail = await findContact({
        phoneNumber: contactDeatils.phoneNumber
     });

     if(findContact){
        throw new Error("Contact already exists");
     }
  // 2. if not present then add the contact in the database
      const newContact = await createContact({
        name: contactDeatils.name,
        email: contactDeatils.email,
        phoneNumber: contactDeatils.phoneNumber
      });

      if(!newContact){
        throw new Error("Something went wrong while adding the contact");
      }

      return newContact;
  // 3. return the contact added successfully




}

export {addContact}