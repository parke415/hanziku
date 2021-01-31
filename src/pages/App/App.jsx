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

export default function App() {
  const [user, setUser] = useState(getUser());
  const [characters, setCharacters] = useState([]);

  const history = useHistory();

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

  useEffect(() => {
    history.push("/")
  }, [characters, history])

  async function handleAddCharacter(newCharacterData) {
    const newCharacter = await charactersAPI.create(newCharacterData);
    setCharacters([...characters, newCharacter]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} characters={characters} />
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
            </Switch>
            <br />
            <Switch>
              <Route path="/characters">
                <img className= "banner" src={banner} alt="Banner" />
              </Route>
              <Route path="/new">
                <NewCharacterPage handleAddCharacter={handleAddCharacter}/>
              </Route>
              <Route path="/details">
                <CharacterDetailPage />
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
