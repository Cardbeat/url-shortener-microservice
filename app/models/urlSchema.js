const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const newUrl = new Schema({
  original_url: String,
  short_url: String
});


const urlSchema = mongoose.model('urlSchema', newUrl );

module.exports = urlSchema;
