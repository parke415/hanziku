import './CharacterListItem.css';
import {Link} from 'react-router-dom';

export default function CharacterListItem({ character }) { 
  return (
    <div>
      <Link className="link" to={{ pathname: '/details', state: {character} }}>
        <div className={`tile ${character.learned ? 'learned' : 'learning'}`}>{character.glyph}</div>
      </Link>
    </div>
  );
}