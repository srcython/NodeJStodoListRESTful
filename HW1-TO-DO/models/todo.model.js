const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TodoSchema = new Schema({

    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },

}, {
    versionKey: false,


});
module.exports = mongoose.model("Todo", TodoSchema);