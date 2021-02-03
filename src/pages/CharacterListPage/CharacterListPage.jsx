import CharacterListItem from '../../components/CharacterListItem/CharacterListItem';

export default function CharacterListPage({ characters }) {
  return (
    <>
      <br />
      <div>
        {characters.map(character => <CharacterListItem key={character._id} character={character}/>)}
      </div>
    </>
  );
}
