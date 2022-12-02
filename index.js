import express, { json } from 'express';
import mongoose from 'mongoose';
import crudRoutes from './api/CRUDfunc';
require('dotenv').config();
import cors from 'cors';

const app = express();
app.use(json());

app.use(
    cors(
        {

            origin: "*",
            // origin: ["https://visionary-gecko-559fb4.netlify.app"],
            methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
            preflightContinue: true,
            credentials: false
        }
    )
);

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("remote database connected");
}).catch((e) => { console.log("Error Message:", e); })


// if we get '/' in call we will go to crud
app.use('/', crudRoutes);

app.listen(5002, () => {
    console.log('use Postman to test, url--> http://localhost:5002/');
})