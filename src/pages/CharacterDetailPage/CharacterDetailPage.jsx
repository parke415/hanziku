import './CharacterDetailPage.css';
import CharacterDetailItem from '../../components/CharacterDetailItem/CharacterDetailItem';
import { useParams, useLocation } from 'react-router-dom';

export default function CharacterDetailPage({ characters, handleUpdateCharacter, handleDeleteCharacter }) {

  // const { id } = useParams();
  // const character = characters.find(character => character._id === id);
  // if (!character) return null;

  const character = useLocation().state.character;

  return (
    <CharacterDetailItem character={character} handleUpdateCharacter={handleUpdateCharacter} handleDeleteCharacter={handleDeleteCharacter} />
  );
}