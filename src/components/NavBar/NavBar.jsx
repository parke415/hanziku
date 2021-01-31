import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser, characters }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  let learnedChars = characters.reduce((learned, character) => character.learned ? ++learned : learned, 0);
  let encouragement;
  switch (learnedChars) {
    case learnedChars === characters.length && learnedChars:
      encouragement = 'Congratulations';
      break;
    case learnedChars > (characters.length - learnedChars) && learnedChars:
      encouragement = 'Doing great';
      break;
    case learnedChars === (characters.length - learnedChars) && learnedChars:
      encouragement = 'Halfway there';
      break;
    case learnedChars < (characters.length - learnedChars) && learnedChars:
      encouragement = 'Keep going';
      break;    
    default:
      encouragement = 'Welcome';
  }

  return (
    <nav>
      <NavLink exact to="/characters/all">Collection ({characters.length})</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact to="/characters/learn">Learn ({characters.length - learnedChars})</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact to="/characters/review">Review ({learnedChars})</NavLink>
      &nbsp; | &nbsp;
      <span>{encouragement}, {user.name}!</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}