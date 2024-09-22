import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: [true, "Phone number already exists"],
        maxlength:[10, "Phone number should be of 10 digits"],
        minlength:[10, "Phone number should be atleast 10 digits"]
    }
}, { timestamps: true });


const Contact = mongoose.model("Contact", contactSchema);

export { Contact }