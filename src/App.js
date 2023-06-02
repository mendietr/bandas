/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes rutas para algunos componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente BandDetail debe renderizarse en la ruta "/band/:id".
🟢 El componente CreateBand debe renderizarse en la ruta "/band/create".
*/

import React from "react";
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import BandDetail from './components/BandDetail/BandDetail';
import CreateBand from './components/CreateBand/CreateBand';


const App = () => {
   return (<div className="App">
   <Nav />
   <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/band/:id" element={<BandDetail />} />
  <Route path="/band/create" element={<CreateBand />} />
</Routes>

 </div>
   );

}
export default App;
