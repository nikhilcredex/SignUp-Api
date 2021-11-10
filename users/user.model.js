const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    tenthMarks: { type: String, required: true },
    twelthMarks: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);