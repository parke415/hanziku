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
      <div className="detail">Variants: {character.variants}</div>
      <div className="detail">Meaning: {character.definition}</div>
      <div className="detail">Mandarin: {character.readingM}</div>
      <div className="detail">Cantonese: {character.readingC}</div>
      <div className="detail">Sino-Japanese: {character.readingSJ}</div>
      <div className="detail">Japanese: {character.readingJ}</div>
      <div className="detail">Sino-Korean: {character.readingSK}</div>
      <div className="detail">Vietnamese: {character.readingV}</div>
      <div className="detail">Semantic Component(s): {character.semantic}</div>
      <div className="detail">Phonetic Component: {character.phonetic}</div>
      <hr />
      <br />
      <Link to={{ pathname: `/edit/${character._id}`, state: {character} }}>EDIT</Link>
      <br />
      <button onClick={() => handleDeleteCharacter(character._id)}>DELETE</button>
    </>
  );
}
