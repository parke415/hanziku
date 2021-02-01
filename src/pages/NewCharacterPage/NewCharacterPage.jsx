import './NewCharacterPage.css';
import { useState, useEffect, useRef } from 'react';

export default function NewCharacterPage({ handleAddCharacter }) {
  const [formValidity, setFormValidity] = useState(true);
  const [formData, setFormData] = useState({
    glyph: '',
    strokes: '0',
    variants: '',
    definition: '',
    readingM: '',
    readingC: '',
    readingSK: '',
    readingSJ: '',
    readingJ: ''
  });

  const formRef = useRef();

  useEffect(() => formRef.current.checkValidity() ? setFormValidity(false) : setFormValidity(true), [formData]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddCharacter(formData);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <h1>New Character</h1>
      <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label>Character</label>
          <input onChange={handleChange} name="glyph" value={formData.glyph} required />
        </div>
        <div>
          <label>Strokes</label>
          <input onChange={handleChange} name="strokes" value={formData.strokes} />
        </div>
        <div>
          <label>Variants</label>
          <input onChange={handleChange} name="variants" value={formData.variants} />
        </div>
        <div>
          <label>Meaning</label>
          <input onChange={handleChange} name="definition" value={formData.definition} />
        </div>
        <div>
          <label>Mandarin</label>
          <input onChange={handleChange} name="readingM" value={formData.readingM} />
        </div>
        <div>
          <label>Cantonese</label>
          <input onChange={handleChange} name="readingC" value={formData.readingC} />
        </div>
        <div>
          <label>Sino-Korean</label>
          <input onChange={handleChange} name="readingSK" value={formData.readingSK} />
        </div>
        <div>
          <label>Sino-Japanese</label>
          <input onChange={handleChange} name="readingSJ" value={formData.readingSJ} />
        </div>
        <div>
          <label>Japanese</label>
          <input onChange={handleChange} name="readingJ" value={formData.readingJ} />
        </div>
        <button className="btn" type="submit" disabled={formValidity}>Add Entry</button>
      </form>
    </>
  );
}