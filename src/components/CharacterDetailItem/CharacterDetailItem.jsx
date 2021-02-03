import '../../stylesheets/style.css';
import {Link} from 'react-router-dom';

export default function CharacterDetailItem({ character, handleUpdateCharacter, handleDeleteCharacter }) {

  return (
    <>
      <br />
      <hr />
      <div
        className={`tile ${character.learned ? 'learned' : 'learning'} toggle`}
        onClick={() => handleUpdateCharacter({...character, learned: !character.learned})}
      >{character.glyph}</div>
      <div className="subtext">(click to {character.learned ? 'unlearn' : 'learn'})</div>
      <hr />
      <div className="detail">{character.strokes ? 'STROKES: ' + character.strokes : ''}</div>
      <div className="detail">{character.variants ? 'VARIANTS: ' + character.variants : ''}</div>
      <div className="detail">{character.readingM ? 'MANDARIN: ' + character.readingM : ''}</div>
      <div className="detail">{character.readingC ? 'CANTONESE: ' + character.readingC : ''}</div>
      <div className="detail">{character.readingSJ ? 'SINO-JAPANESE: ' + character.readingSJ : ''}</div>
      <div className="detail">{character.readingJ ? 'JAPANESE: ' + character.readingJ : ''}</div>
      <div className="detail">{character.readingSK ? 'SINO-KOREAN: ' + character.readingSK : ''}</div>
      <div className="detail">{character.readingV ? 'VIETNAMESE: ' + character.readingV : ''}</div>
      <div className="detail">{character.semantic ? 'SEMANTIC: ' + character.semantic : ''}</div>
      <div className="detail">{character.phonetic ? 'PHONETIC: ' + character.phonetic : ''}</div>
      <div className="detail">{character.definition ? 'MEANING: ' + character.definition : ''}</div>
      <hr />
      <br />
      <Link to={{ pathname: `/edit/${character._id}`, state: {character} }}>EDIT</Link>
      <br />
      <button className="delete" onClick={() => handleDeleteCharacter(character._id)}>DELETE</button>
    </>
  );
}
