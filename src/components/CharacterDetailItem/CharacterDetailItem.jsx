import '../../stylesheets/style.css';
import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function CharacterDetailItem({ character, handleUpdateCharacter }) {

  const [formData, setFormData] = useState(useLocation().state.character);

  function toggleLearned() {
    setFormData({ ...formData, learned: !character.learned });
    handleUpdateCharacter(formData);
  }

  return (
    <>
      <br />
      <hr />
      <div
        className={`tile ${character.learned ? 'learned' : 'learning'}`}
        role="button"
        tabIndex={0}
        onClick={toggleLearned}
      >{character.glyph}</div>
      <div className="subtext">(click to {character.learned ? 'unlearn' : 'learn'})</div>
      <hr />
      <div className="detail">Strokes: {character.strokes}</div>
      <div className="detail">{character.variants ? character.variants.split('').join('･') : ''}</div>
      <hr />
      <br />
      <div>
        <Link to='/edit'>EDIT</Link>
      </div>
    </>
  );
}
