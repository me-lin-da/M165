const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Employee', employeeSchema);
