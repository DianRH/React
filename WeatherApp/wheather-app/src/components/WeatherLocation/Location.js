import React from 'react';
import PropTypes from 'prop-types'; //para validar la propiedad city
import './styles.css';

//
//  const Location = (props) => { //parámetros
// /*  console.log(props);
//   debugger; esto fue utilizado para ver las herramientas de debugging en chrome con f12 o clic derecho inspeccionar*/
//   const city = props.city; //props.city es el valor del parametro que se esta pasando desde WeatherLocation
//
//   return( // es conveniente poner parentesis para asegurarnos que va a funcionar
//       <div><h1>{city}</h1></div>);
// };
// //----------------------------------------------------------------------------------------------------------------//
// //utilizando destructuring
// const Location = (props) => {
//
//   //Destructuring
//   /*cuando tenemos una propiedad con un nombre que queremos asignar o una variable o constante con el mismo nombre
//    que la propiedad la podemos asignar de forma directa*/
//   const { city } = props;// para simplificarlo aun mas eliminamos esta linea y ponemos el parametro en la funcion
//
//  return(
//      <div><h1>{city}</h1></div>);
// };

//------------------------------------------------------------------------------------------------------------------//
//simplificarlo aun mas con destructuring

const Location = ( {city} ) =>(
  <div className="locationCont">
    <h1>
      {city}
    </h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired, //pts y al desplegar el cartel solo enter y agrega todo

};

export default Location;
