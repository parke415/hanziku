import './CharacterDetailPage.css';
import CharacterDetailItem from '../../components/CharacterDetailItem/CharacterDetailItem';
import { useLocation } from 'react-router-dom';

export default function CharacterDetailPage({ handleUpdateCharacter }) {
  
  const character = useLocation().state.character;

  return (
    <>
      <CharacterDetailItem character={character} handleUpdateCharacter={handleUpdateCharacter} key={character._id} />
    </>
  );
}
