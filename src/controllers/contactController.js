import { addContact } from "../service/contactService.js";

async function createContact(req, res) {
    try {
        const contact = await addContact(req.body);
        console.log("Add contact controller");
        console.log(req.body);
        console.log(contact);
        return res.status(201).json({
            message: "Contact added Successfully",
            data: contact,
            error: "",
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to add contact",
            data: "",
            error:error,
            success:false
        })
    }
}


export { createContact }