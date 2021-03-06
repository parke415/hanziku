require('dotenv').config();
require('./config/database');

const Character = require('./models/character');

(async function() {

  await Character.deleteMany({});
  const characters = await Character.create([
    {glyph: '氣', learned: false, strokes: 10, variants: '気气', definition: 'breath; gas',
    readingM: 'qi4', readingC: 'hei3', readingSJ: 'ki', readingJ: 'iki', readingSK: 'ki', readingV: '',
    semantic: '', phonetic: '', user: null},
    {glyph: '月', learned: true, strokes: 4, variants: '', definition: 'moon; month',
    readingM: 'yue4', readingC: 'jyut6', readingSJ: 'getsu, gatsu', readingJ: 'tsuki', readingSK: 'weol', readingV: '',
    semantic: '', phonetic: '', user: null},
    {glyph: '員', learned: false, strokes: 10, variants: '貟', definition: 'member',
    readingM: 'yuan2', readingC: 'jyun4', readingSJ: 'in, en', readingJ: 'kazu', readingSK: 'weon', readingV: '',
    semantic: '', phonetic: '', user: null}
  ]);

  process.exit();

})();
