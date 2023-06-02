/*5️⃣ ***COMPONENTE HOME*** 5️⃣

Implementar el componente Home. Este deberá renderizar una lista de eventos (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.

🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.

🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <BandCard />.

IMPORTANTE
❗Este componente debe ser de clase.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/
// import * as actions from '../../redux/actions';
// import * as data from '../db.json';
import React from 'react';

import { connect } from 'react-redux';
import './home.css';

import { getAllBands } from '../../redux/actions';
import img from '../../img-cp2/main-image-cp2.jpg';
import BandCard from '../BandCard/BandCard';

export class Home extends React.Component {
   componentDidMount() {
      this.props.getAllBands();
   }

   render() {
      const { bands } = this.props;
      return <div className='home'>
         <h1>Henry Palooza</h1>
         <img src={img} alt="henry-palooza-logo"/>
         <h3>Bandas</h3>
         <h4>Checkpoint M2</h4>

         {this.props.bands &&
          this.props.bands.map((band) => (
            <BandCard
              key={band.name}
              id={band.id}
              name={band.name}
              image={band.image}
              functionDate={band.functionDate}
            />
            
         ))}
    );   

      </div>;
   }
}

export const mapStateToProps = (state) => {
   return {
   bands: state.bands,
 };
};

 export const mapDispatchToProps = { getAllBands };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
