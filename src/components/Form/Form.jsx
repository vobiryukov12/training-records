import { useState } from "react";

export default function Form({ addItemFunc }) {
  const [form, setForm] = useState({
    date: new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2),
    distance: ''
  });
  const [id, setId] = useState(0);

  const { date, distance } = form;
  
  const clearState = () => {
    setForm((prevForm) => ({
      ...prevForm,
      distance: ''
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setId(id + 1);

    addItemFunc({
      id,
      date,
      distance,
    });

    clearState();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };
  
  return (
    <form className="page__form form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label className="form__label" htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
        <input 
          className="form__input" 
          type="date" 
          id="date" 
          name="date" 
          value={date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="distance">Пройдено км</label>
        <input 
          className="form__input" 
          type="number" 
          id="distance" 
          name="distance" 
          placeholder="25"
          value={distance}
          onChange={handleChange}
          required
        />
      </div>

      <button className="form__button" type="submit">ОК</button>
    </form>
  );
}
