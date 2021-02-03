import './NewCharacterPage.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function NewCharacterPage({ characters, handleAddCharacter }) {
  const [formValidity, setFormValidity] = useState(true);
  const [formData, setFormData] = useState({
    glyph: '',
    variants: '',
    semantic: '',
    phonetic: ''
  });

  const formRef = useRef(); 

  useEffect(() => formRef.current.checkValidity() ? setFormValidity(false) : setFormValidity(true), [formData]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddCharacter(formData);
  }

  function handleChange(evt) {
    if (evt.target.name === 'glyph' && characters.some(character => character.glyph === evt.target.value)) {
      alert('This character has already been added!');
    } else {
      setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }
  }

  return (
    <>
      <h1>New Character</h1>
      <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label>Character</label>
          <input onChange={handleChange} name="glyph" value={formData.glyph} placeholder="(required)" maxLength="1" required />
        </div>
        <div>
          <label>Variants</label>
          <input onChange={handleChange} name="variants" value={formData.variants} />
        </div>
        <div>
          <label>Semantic Component(s)</label>
          <input onChange={handleChange} name="semantic" value={formData.semantic} />
        </div>
        <div>
          <label>Phonetic Component</label>
          <input onChange={handleChange} name="phonetic" value={formData.phonetic} />
        </div>
        <button className="btn" type="submit" disabled={formValidity}>Add Entry</button>
      </form>
      <br />
      <hr />
      <br />
      <Link to='/'>CANCEL</Link>
    </>
  );
}