const { Schema, model } = require("mongoose");

let tagDB = new Schema({
    id: Integer,
    description: String,
    author: String,
    nameTag: String
})
module.exports = model('tag', tagDB)