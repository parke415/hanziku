import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser, characters }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  let learnedChars = characters.reduce((learned, character) => character.learned ? ++learned : learned, 0);
  let unlearnedChars = characters.length - learnedChars;
  let encouragement;
  switch (learnedChars) {
    case (learnedChars === characters.length && learnedChars > 0) && learnedChars:
      encouragement = 'Congratulations';
      break;
    case (learnedChars > unlearnedChars) && learnedChars:
      encouragement = 'Doing great';
      break;
    case (learnedChars === unlearnedChars && learnedChars > 0) && learnedChars:
      encouragement = 'Halfway there';
      break;
    case (learnedChars > 0 && learnedChars < unlearnedChars) && learnedChars:
      encouragement = 'Keep going';
      break;
    case (learnedChars === 0 && unlearnedChars > 0) && learnedChars:
      encouragement = 'Start learning';
      break;
    default:
      encouragement = 'Get started';
  }
  
  return (
    <nav>
      <NavLink exact to="/new">Add</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact to="/characters/learn">Learn ({unlearnedChars})</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact to="/characters/review">Review ({learnedChars})</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact to="/characters/all">Collection ({characters.length})</NavLink>
      &nbsp; | &nbsp;
      <span>{encouragement}, {user.name}!</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}