const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  glyph: {type: String, required: true},
  learned: {type: Boolean, default: false},
  strokes: {type: Number, min: 1, max: 99, required: true},
  variants: {type: String},
  definition: {type: String, required: true},
  readingM: {type: String},
  readingC: {type: String},
  readingSK: {type: String},
  readingSJ: {type: String},
  readingJ: {type: String},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Character', characterSchema);