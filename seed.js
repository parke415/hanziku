require('dotenv').config();
require('./config/database');

const Character = require('./models/character');

(async function() {

  await Character.deleteMany({});
  const characters = await Character.create([
    {glyph: '氣', learned: false, strokes: 10, variants: '気气', definition: 'breath; gas',
    readingM: 'qi4', readingC: 'hei3', readingSK: 'ki', readingSJ: 'ki', readingJ: 'iki', user: null},
    {glyph: '月', learned: true, strokes: 4, variants: '', definition: 'moon; month',
    readingM: 'yue4', readingC: 'jyut6', readingSK: 'weol', readingSJ: 'getsu, gatsu', readingJ: 'tsuki', user: null},
    {glyph: '員', learned: false, strokes: 10, variants: '貟', definition: 'member',
    readingM: 'yuan2', readingC: 'jyun4', readingSK: 'weon', readingSJ: 'in, en', readingJ: 'kazu', user: null}
  ]);

  process.exit();

})();
