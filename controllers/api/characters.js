const Character = require('../../models/character');
const fetch = require('node-fetch');
const utf8 = require('utf8');

const API_SITE = 'http://ccdb.hemiola.com';
const API_FIELDS = 'kTotalStrokes,kDefinition,kMandarin,kCantonese,kJapaneseOn,kJapaneseKun,kHangul,kVietnamese,kKorean';

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteOne,
};

async function index(req, res) {
  const characters = await Character.find({user: req.user._id});
  res.json(characters);
}

async function show(req, res) {
  const character = await Character.findById(req.params.id);
  res.json(character);
}

async function create(req, res) {
  req.body.user = req.user._id;
  const charCode = utf8.encode(req.body.glyph);
  const apiData = await fetch(`${API_SITE}/characters/string/${charCode}?fields=${API_FIELDS}`).then(res => res.json());
  req.body.strokes = apiData[0].kTotalStrokes ? apiData[0].kTotalStrokes : '';
  req.body.definition = apiData[0].kDefinition ? apiData[0].kDefinition : '';
  req.body.readingM = apiData[0].kMandarin ? apiData[0].kMandarin.toLowerCase().split(' ').join(', ') : '';
  req.body.readingC = apiData[0].kCantonese ? apiData[0].kCantonese.toLowerCase().split(' ').join(', ') : '';
  req.body.readingSJ = apiData[0].kJapaneseOn ? apiData[0].kJapaneseOn.toLowerCase().split(' ').join(', ') : '';
  req.body.readingJ = apiData[0].kJapaneseKun ? apiData[0].kJapaneseKun.toLowerCase().split(' ').join(', ') : '';
  req.body.readingSK = (apiData[0].kHangul ? apiData[0].kHangul.split(' ').join(', ') : '') + (apiData[0].kKorean ? ` (${apiData[0].kKorean.toLowerCase().split(' ').join(', ')})` : '');
  req.body.readingV = apiData[0].kVietnamese ? apiData[0].kVietnamese.split(' ').join(', ') : '';
  const newCharacter = await Character.create(req.body);
  res.json(newCharacter);
}

async function update(req, res) {
  if (req.body.user === req.user._id) {
    const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCharacter);
  }
}

async function deleteOne(req, res) {
  const queuedCharacter = await Character.findById(req.params.id);
  try {
    if (queuedCharacter.user.toString() === req.user._id) {
      const deletedCharacter = await Character.findByIdAndRemove(req.params.id);
      res.json(deletedCharacter);
    }
  } catch {
    throw new Error("You didn't say the magic word...");
  }
}
