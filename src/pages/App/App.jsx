import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import banner from '../../images/hzk-banner.svg';
import * as charactersAPI from '../../utilities/characters-api';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CharacterListPage from '../../pages/CharacterListPage/CharacterListPage';
import CharacterDetailPage from '../../pages/CharacterDetailPage/CharacterDetailPage';
import NewCharacterPage from '../../pages/NewCharacterPage/NewCharacterPage';
import EditCharacterPage from '../../pages/EditCharacterPage/EditCharacterPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const characters = await charactersAPI.getAll();
      setCharacters(characters);
    }
    if (user) {
      getCharacters();
    } else {
      setCharacters([]);
    }
  }, [user]);

  const history = useHistory();  
  
  async function handleAddCharacter(newCharacterData) {
    const newCharacter = await charactersAPI.create(newCharacterData);
    setCharacters([...characters, newCharacter]);
    history.push(`/characters/${newCharacter._id}`);
  }

  async function handleUpdateCharacter(updatedCharacterData) {
    const updatedCharacter = await charactersAPI.update(updatedCharacterData);
    const newCharacters = characters.map(character => character._id === updatedCharacter._id ? updatedCharacter : character);
    setCharacters(newCharacters);
    history.push(`/characters/${updatedCharacter._id}`);
  }

  async function handleDeleteCharacter(characterID) {
    await charactersAPI.deleteOne(characterID);
    setCharacters(characters.filter(character => character._id !== characterID));
    history.push('/characters/all');
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} characters={characters} />
          <br />
          <Switch>
            <Route path="/characters/all">
              <CharacterListPage characters={characters} />
            </Route>
            <Route path="/characters/learn">
              <CharacterListPage characters={characters.filter(character => !character.learned)} />
              </Route>
             <Route path="/characters/review">
              <CharacterListPage characters={characters.filter(character => character.learned)} />
            </Route>
            <Route exact path="/characters">
              <img className= "banner" src={banner} alt="Banner" />
            </Route>
            <Route path="/characters/:id">
              <CharacterDetailPage characters={characters} handleUpdateCharacter={handleUpdateCharacter} handleDeleteCharacter={handleDeleteCharacter} />
            </Route>
            <Route path="/new">
              <NewCharacterPage characters={characters} handleAddCharacter={handleAddCharacter} />
            </Route>
            <Route path="/edit/:id">
              <EditCharacterPage handleUpdateCharacter={handleUpdateCharacter} />
            </Route>
            <Redirect to="/characters" />
          </Switch>
        </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
