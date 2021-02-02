import './CharacterDetailPage.css';
import CharacterDetailItem from '../../components/CharacterDetailItem/CharacterDetailItem';
import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import * as charactersAPI from '../../utilities/characters-api';

export default function CharacterDetailPage({ characters, handleUpdateCharacter, handleDeleteCharacter }) {
  // const [character, setCharacter] = useState({});

  const { id } = useParams();

  // useEffect(() => {
  //   async function getCharacter() {
  //     const character = await charactersAPI.getOne(id);
  //     setCharacter(character);
  //   }
  //   getCharacter();
  // }, [character.learned]);
  
  const character = characters.find(character => character._id === id);

  if (!character) return null;

  return (
    <CharacterDetailItem character={character} handleUpdateCharacter={handleUpdateCharacter} handleDeleteCharacter={handleDeleteCharacter} />
  );
}