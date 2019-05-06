import React, { Component } from 'react';
//import WeatherLocation from './components/WeatherLocation';// se importo el componente WeatherLocation
import LocationList from './components/LocationList';
import './App.css';

//se define la constante cities en un array
const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component {
  render() {
    return (
      <div className="App">
            {/*<WeatherLocation city={"Alemania,deu"}></WeatherLocation> */}{/*Este es el nombre del tag*/}
              <LocationList cities={cities}></LocationList> {/*se cambia por LocationList para mostrar una lista de diferentes ciudades,se incorpora el parámetro cities del archivo LocationList*/}
      </div>   
    );
  }
}

export default App;
