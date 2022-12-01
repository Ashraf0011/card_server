const express = require('express');
const mongoose = require('mongoose');
const crudRoutes = require('./CRUDfunc');
require('dotenv').config();
var cors = require('cors');


const app = express();
app.use(express.json());

app.use(
    cors(
        {
            origin: ["https://visionary-gecko-559fb4.netlify.app/"],
            methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
            preflightContinue: true,
            credentials: true
        }
    )
);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("remote database connected");
}).catch((e) => { console.log("Error Message:", e); })


// if we get '/' in call we will go to crud
app.use('/', crudRoutes);

app.listen(5002, () => {
    console.log('use Postman to test, url--> http://localhost:5002/');
})