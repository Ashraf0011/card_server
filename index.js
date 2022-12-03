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
        // allowedHeaders: ['Content-Type', 'x-requested-with']
    })
);


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dbcluster.nlm3zmb.mongodb.net/?retryWrites=true&w=majority`)
    .then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    })


// if we get '/' in call we will go to crud
app.use('/', crudRoutes);

app.listen(5002, () => {
    console.log('use Postman to test, url--> http://localhost:5002/');
})