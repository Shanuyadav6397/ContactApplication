import express from 'express';
import { PORT } from './config/serverConfig.js';
import { contactRouter } from './routes/contactRoute.js';
import { connectDB } from './config/dbConfig.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});


app.use('/api/v1/contact', contactRouter);