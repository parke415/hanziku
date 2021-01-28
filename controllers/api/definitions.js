const Character = require('../../models/character');

module.exports = {
  create,
  delete: deleteOne
};

function create(req, res) {
  Character.findById(req.params.id, (err, character) => {
    if (!character.user.equals(req.user._id)) return res.redirect(`/characters/${character._id}`);
    character.definitions.push(req.body);
    character.save(err => res.redirect(`/characters/${character._id}`));
  });
}

function deleteOne(req, res) {
  Character.findById(req.params.id, (err, character) => {
    if (!character.user.equals(req.user._id)) return res.redirect(`/characters/${character._id}`);
    character.definitions = [];
    character.save(err => res.redirect(`/characters/${character._id}`));
  });
}