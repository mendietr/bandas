/* 6️⃣ ***COMPONENTE CREATEBAND*** 6️⃣

Implementar el componente CreateBand. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/
import React from 'react';
import { useDispatch } from "react-redux"
import * as accions from "../../redux/actions/index"

const CreateBand = () => {
  // Inicializar estado local.
  const [form, setForm] = React.useState({
  name: "",
  origin: "",
  description: "",
  tickets: 0,
  });
  
  // Variable de estado para errors
  const [errors, setErrors] = React.useState("");
  const dispatch = useDispatch();
  
  // Modificar el estado cuando hay un cambio en el valor del input "name".
  const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  // Despachar la action "createBand" con los datos del estado local cuando se haga submit del form.
  const handleSumit = (e) => {
  e.preventDefault(); // Evita que se refresque la pág luego de hacer submit con el evento "preventDefault"
  if (errors.length > 0) {
  return; // Si hay errores, no deberia despachar la action
  }
  dispatch(accions.createBands(form));
  };
  
  // Manejo de errores
  React.useEffect(() => {
  if (form.name.length > 30 || form.origin.length > 30) {
  setErrors("Nombre u Origen demasiado largo");
  } else if (form.tickets < 0) {
  setErrors("Los tickets deben ser un numero positivo");
  } else {
  setErrors("");
  }
  }, [form]);
  
  return (
  <div>
  <form onSubmit={handleSumit}>
  <label>Name: </label>
  <input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  />
  <label>Origin: </label>
  <input
  type="text"
  name="origin"
  value={form.origin}
  onChange={handleChange}
  />
  {/* Debe renderizar un textarea con el atributo name igual a "description" */}
  <label>Description: </label>
  <textarea name="description" onChange={handleChange}></textarea>
  <label>Tickets: </label>
  <input
  type="number"
  name="tickets"
  value={form.tickets}
  onChange={handleChange}
  />
  <button type="submit" disabled={errors.length > 0}>
  Create Band
  </button>
  {errors.length > 0 && <p>{errors}</p>}{" "}
  {/*renderizar un <p> indicando el error*/}
  </form>
  </div>
  );
  };
  
  export default CreateBand;