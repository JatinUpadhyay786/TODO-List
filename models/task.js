const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
//collection name
const mytodo = mongoose.model('Task', todoSchema);
module.exports = mytodo;