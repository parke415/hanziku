import {Link} from 'react-router-dom';

export default function CharacterDetailItem({ character }) { 
  return (
    <>
      <div>{character.glyph}</div>
      <div>
        <ul>
          <li>Variants: {character.variants}</li>
          <li>Strokes: {character.strokes}</li>
        </ul>
      </div>
      <div>
        <Link to='/edit'>EDIT</Link>
      </div>
    </>
  );
}
