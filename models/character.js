const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const componentSchema = new Schema({
  glyph: {type: String, required: true},
  role: {type: String, enum: ['semantic', 'phonetic', 'phono-semantic'], required: true},
  form: {type: String}
})

const definitionSchema = new Schema({
  meaning: {type: String, required: true},
  role: {type: String},
  index: {type: Number}
});

const readingSchema = new Schema({
  sound: {type: String, required: true},
  language: {type: String, enum: ['Mandarin', 'Cantonese', 'Chinese', 'Japanese', 'Korean', 'Vietnamese'], required: true},
  register: {type: String, enum: ['colloquial', 'literary', 'native', 'Sinoxenic']},
  definitions: {type: String}
});

const characterSchema = new Schema({
  glyph: {type: String, required: true},
  variants: {type: String},
  strokes: {type: Number, min: 1, max: 99, required: true},
  learned: {type: Boolean, default: false},
  compound: {type: Boolean, required: true},
  components: [componentSchema],
  definitions: [definitionSchema],
  readings: [readingSchema],
  user: {type: Schema.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model('Character', characterSchema);