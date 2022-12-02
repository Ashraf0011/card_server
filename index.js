import express, { json } from 'express';
import mongoose from 'mongoose';
import crudRoutes from './api/CRUDfunc';
require('dotenv').config();
import cors from 'cors';

const app = express();
app.use(json());

app.use(
    cors({
        origin: "*",
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        preflightContinue: true,
        credentials: true,
        allowedHeaders: ['Content-Type', 'Application/json', 'x-requested-with']
    })
);
app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("remote database connected");
    })
    .catch((e) => { console.log("Error Message:", e); })


// if we get '/' in call we will go to crud
app.use('/', crudRoutes);

app.listen(5002, () => {
    console.log('use Postman to test, url--> http://localhost:5002/');
})