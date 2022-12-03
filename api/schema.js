import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const CRUDschema = new Schema({
    name: { type: String, required: true },
    card_number: { type: Number, },
    exp_month: { type: Number, },
    exp_year: { type: Number, },
    cvc: { type: Number, },
}, { collection: 'Payments' });

// export
export default model("CURD_SCHEMA", CRUDschema);