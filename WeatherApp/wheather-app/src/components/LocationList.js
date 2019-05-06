import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation'

/*esta tomando un array y obtiene una lista de componentes o elementos*/
const strToComponents = cities => (
  cities.map( city => <WeatherLocation key={city} city= {city} />) /*city es una propiedad de location*/
);                                                                 /*en una lista de componentes se le debe de asignar una key natural en este caso la ciudad que será única en cada componente*/
//componente funcional(stateless component), es un componente que no tiene estado
const LocationList = ({cities}) =>( //el parámetro cities va a aceptar una lista de ciudades,que se pasan desde App.js
  <div>
    {strToComponents(cities)} {/*llaves para código js*/}
  </div>
);

//validación con PropTypes
LocationList.propTypes = {
  cities: PropTypes.array.isRequired,

}

export default LocationList;
