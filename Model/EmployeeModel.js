const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmpSchema = new Schema({
    id: {type: Number, required: true, max: 100},
    name: {type: String, required: true},
    salary:{type: Number, required: true},
	address: {type: String, required: true}
});
