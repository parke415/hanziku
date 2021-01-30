import './CharacterListPage.css';
import CharacterListItem from '../../components/CharacterListItem/CharacterListItem';

export default function CharacterListPage({ characters }) {
  return (
    <>
      <h1>Character List</h1>
      <div>
        {characters.map(character => <CharacterListItem key={character._id} character={character}/>)}
      </div>
    </>
  );
}
