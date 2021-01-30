import './YuppieListItem.css';
import {Link} from 'react-router-dom';

export default function CharacterListItem({ character }) { 
  return (
    <div>
      <Link to={{ pathname: '/details', state: {character} }}>{character}</Link>
    </div>
  );
}