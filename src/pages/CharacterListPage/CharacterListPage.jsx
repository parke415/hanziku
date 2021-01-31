import './CharacterListPage.css';
import {Link} from 'react-router-dom';
import CharacterListItem from '../../components/CharacterListItem/CharacterListItem';

export default function CharacterListPage({ characters }) {
  return (
    <>
      <br />
      <div>
        {characters.some(character => !character.learned) &&
          <Link className="link" to={{ pathname: '/characters/new' }}>
            <div className="tile add">＋</div>
          </Link>
        }
        {characters.map(character => <CharacterListItem key={character._id} character={character}/>).reverse()}
      </div>
    </>
  );
}
