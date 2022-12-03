import { Router } from 'express';
import { MongoClient, ServerApiVersion } from 'mongoose';
const router = Router();
import CURD_SCHEMA from './schema';


// Properly working version for vercel based backend.
router.route('/').get((req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.send("Backend Connected!!");
})

router.route('/api/create').post((req, res) => {
    // 1. schema.save or schema.create both saves data to mongoDB
    // 2. we need schema to verify and validate data structure
    // 3. req.body is the recived object.  req.body is cardDetails itself.

    let CardDetails = req.body
    console.log("new req", CardDetails);

    CURD_SCHEMA.create(CardDetails, (error, data) => {
        if (error) {
            console.log("error occured", error);
            res.send(error);
        } else {
            res.status(200).json(data);
        }
    })
});


// let transferredData = { name, card_number, exp_month, exp_year, cvc };
// console.log("trans", transferredData);
// async and callback doesnot work togather.
// try {
//     let data = await CURD_SCHEMA.create(CardDetails, (er, data) => { })
//     console.log(typeof (data.CardDetails.exp_month));
//     res.send(data)
// } catch (e) {
//     console.log(e);
//     res.send(e)
// }



















// router.route('/update/:id').get((req, res) => {
//     CURD_SCHEMA.find((err, data) => {
//         if (err) {
//             console.log(err);
//             res.send(err.message);

//         } else {
//             console.log(data);
//             res.json(data);
//         }
//     })
// })

// router.route('/crud/:id').get((req, res) => {
//     CURD_SCHEMA.findByID(req.params.id, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.send(err.message);

//         } else {
//             console.log(data);
//             res.json(data);
//         }
//     })
// })

// router.route('/crud/:id').put((req, res) => {
//     CURD_SCHEMA.findByIDAndUpdate(req.params.id, { $set: req.body }, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.send(err.message);

//         } else {
//             console.log(data);
//             res.json(data);
//         }
//     })
// })

// router.route('/crud/:id').delete((req, res) => {
//     CURD_SCHEMA.findByIDAndRemove(req.params.id, { $set: req.body }, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.send(err.message);

//         } else {
//             console.log(data);
//             res.json(data);
//         }
//     })
// })




export default router;