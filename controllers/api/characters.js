const Character = require('../../models/character');

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
  const newCharacter = await Character.create(req.body);
  res.json(newCharacter);
}

async function update(req, res) {
  const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCharacter);
}

async function deleteOne(req, res) {
  const deletedCharacter = await Character.findByIdAndRemove(req.params.id);
  res.json(deletedCharacter);
}