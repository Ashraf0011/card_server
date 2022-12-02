import express, { json } from 'express';
import mongoose from 'mongoose';
import crudRoutes from './api/CRUDfunc';
require('dotenv').config();
import cors from 'cors';
const MONGO_URL = "mongodb+srv://DarkChocolate:ChocolateDark@dbcluster.nlm3zmb.mongodb.net/PaymentDetails?retryWrites=true&w=majority"

const app = express();
app.use(json());

app.use(
    cors(
        {
            origin: ["https://visionary-gecko-559fb4.netlify.app"],
            methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
            preflightContinue: true,
            credentials: true
        }
    )
);

mongoose.connect(MONGO_URL, () => {
    console.log("remote database connected");
}).catch((e) => { console.log("Error Message:", e); })


// if we get '/' in call we will go to crud
app.use('/', crudRoutes);

app.listen(5002, () => {
    console.log('use Postman to test, url--> http://localhost:5002/');
})