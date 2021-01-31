require('dotenv').config();
require('./config/database');

const Character = require('./models/character');

(async function() {

  await Character.deleteMany({});
  const characters = await Character.create([
    {glyph: '氣', variants: '気气', strokes: 10, learned: false, compound: true, components: [], definitions: [], readings: [], user: null},
    {glyph: '月', variants: '', strokes: 4, learned: true, compound: false, components: [], definitions: [], readings: [], user: null},
    {glyph: '員', variants: '貟', strokes: 10, learned: false, compound: true, components: [], definitions: [], readings: [], user: null}
  ]);

  process.exit();

})();
