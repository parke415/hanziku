import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
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
    getCharacters();
  }, []);

  useEffect(() => {
    history.push("/")
  }, [characters, history])

  async function handleAddCharacter(newCharacterData) {
    const newCharacter = await yuppiesAPI.create(newCharacterData);
    setCharacters([...characters, newCharacter]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/characters">
                <CharacterListPage characters={characters} />
              </Route>
              <Route path="/characters/new">
                <NewCharacterPage />
              </Route>
              <Redirect to="/orders" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
