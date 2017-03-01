const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const newUrl = new Schema({
  original_url: {type: String, required: true},
  short_id: {type: String, required: true, default: shortid.generate}
});


const urlSchema = mongoose.model('urlSchema', newUrl );

module.exports = urlSchema;
