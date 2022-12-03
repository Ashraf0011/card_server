import express, { json } from 'express';
import mongoose from 'mongoose';
import crudRoutes from './api/CRUDfunc';
require('dotenv').config();
import cors from 'cors';
const port = process.env.PORT || 5002;

const app = express();
app.use(json());

app.use(
    cors({
        origin: "*",
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        preflightContinue: true,
        credentials: true,
    })
);


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dbcluster.nlm3zmb.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("DB connected");
    }).catch((e) => {
        console.log(e);
    })


// if we get '/' in call we will go to crud
app.use('/', crudRoutes);

app.listen(port, () => {
    console.log(`use Postman to test, url--> http://localhost:/${port}`);
})