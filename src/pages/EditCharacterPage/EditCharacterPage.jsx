import '../../stylesheets/sheet.css';
import { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

export default function EditCharacterPage({ handleUpdateCharacter }) {
  const [formValidity, setFormValidity] = useState(true);
  const [formData, setFormData] = useState(useLocation().state.character);

  const formRef = useRef();
  const { id } = useParams();

  useEffect(() => formRef.current.checkValidity() ? setFormValidity(false) : setFormValidity(true), [formData]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateCharacter(formData);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <div className="sheet">
      <br />
      <hr />
      <h1>Edit Character ({useLocation().state.character.glyph})</h1>
      <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label>Meaning</label>
          <input onChange={handleChange} name="definition" value={formData.definition} />
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
        <div>
          <label>Mandarin</label>
          <input onChange={handleChange} name="readingM" value={formData.readingM} />
        </div>
        <div>
          <label>Cantonese</label>
          <input onChange={handleChange} name="readingC" value={formData.readingC} />
        </div>
        <div>
          <label>Sino-Japanese</label>
          <input onChange={handleChange} name="readingSJ" value={formData.readingSJ} />
        </div>
        <div>
          <label>Japanese</label>
          <input onChange={handleChange} name="readingJ" value={formData.readingJ} />
        </div>
        <div>
          <label>Sino-Korean</label>
          <input onChange={handleChange} name="readingSK" value={formData.readingSK} />
        </div>
        <div>
          <label>Vietnamese</label>
          <input onChange={handleChange} name="readingV" value={formData.readingV} />
        </div>
        <button className="btn" type="submit" disabled={formValidity}>UPDATE</button>
      </form>
      <br />
      <hr />
      <br />
      <Link to={{ pathname: `/characters/${id}` }}>CANCEL</Link>
    </div>
  );
}