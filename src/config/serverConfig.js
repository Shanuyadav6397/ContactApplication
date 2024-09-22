import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});


const PORT = process.env.PORT || 3500;
const DB_URL = process.env.DB_URL


export {
    PORT,
    DB_URL
}