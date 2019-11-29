const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    batch: {type: Number, trim: true, required: true},
    category: {type: String, trim: true, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    what: {type: String, required: true},
    when: {type: String, required: true},
    why: {type: String, required: true},
    status: {type: String, required: true},
    statusDate: {type: String, required: true},
    dateOfSubmit: {type: String, required: true},
});

var Request = mongoose.model('Request', RequestSchema);
// hash user password before saving into database
// User.pre('save', function (next) {
//     this.password = bcrypt.hashSync(this.password, saltRounds);
//     next();
// });

module.exports = Request;