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
      <div className="detail">Strokes: {character.strokes}</div>
      <div className="detail">Variants: {character.variants ? character.variants.split('').join('･') : ''}</div>
      <div className="detail">Meaning: {character.definition}</div>
      <div className="detail">Mandarin: {character.readingM}</div>
      <div className="detail">Cantonese: {character.readingC}</div>
      <div className="detail">Sino-Korean: {character.readingK}</div>
      <div className="detail">Sino-Japanese: {character.readingJO}</div>
      <div className="detail">Japanese: {character.readingJK}</div>
      <hr />
      <br />
      <Link to={{ pathname: '/edit', state: {character} }}>EDIT</Link>
      <br />
      <button onClick={() => handleDeleteCharacter(character._id)}>DELETE</button>
    </>
  );
}
