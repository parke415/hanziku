import '../../stylesheets/style.css';
import {Link} from 'react-router-dom';

export default function CharacterDetailItem({ character }) { 
  return (
    <>
      <br />
      <hr />
      <div className={`tile ${character.learned ? 'learned' : 'learning'}`}>{character.glyph}</div>
      <br />
      <br />
      <hr />
      <br />
      <div className="detail">Strokes: {character.strokes}</div>
      <div className="detail">{character.variants ? character.variants.split('').join('･') : ''}</div>
      <br />
      <hr />
      <br />
      <div>
        <Link to='/edit'>EDIT</Link>
      </div>
    </>
  );
}
