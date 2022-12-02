const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CRUDschema = new Schema({

    CardDetails: {
        type: Object,
        name: { type: String, required: true },
        card_number: { type: Number, },
        exp_month: { type: Number, },
        exp_year: { type: Number, },
        cvc: { type: Number, },
    }

}, { collection: 'Payments' });

// export
module.exports = mongoose.model("CURD_SCHEMA", CRUDschema);