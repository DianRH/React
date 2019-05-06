import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

//se generan las constantes para que al mandar a llamar a los iconos no haya o los errrores sean
//menores al nombre del icono
import {
  CLOUD,
  SUN ,
  RAIN ,
  SNOW,

} from './../../../constants/weathers';
import './styles.css'

const icons = {

    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
};

const getWeatherIcon = weatherState =>{
  const icon = icons[weatherState];// con base a icons con lo que venga en weatherState obtenga un determinado icono

const sizeIcon = "4x";

  //undefined or null -> (primer signo admiracion)true -> (segundo signo)false
  //valor diferente de 0 -> (primer signo)false -> (segundo signo)true
  //no funciona bien con numeros
  // if simplificado
  return <WeatherIcons className="wicon" name={!!icon ? icon : "day-sunny"} size={sizeIcon} />

//------------------ -------------------------------------------------------------------------------------------//

//   if(icon)
//     return  <WeatherIcons name={icon} size="2x" />
//   else
//     return  <WeatherIcons name={"day-sunny"} size="2x" /> //si recibe nulo devuelve un icono por defecto
};


const WeatherTemperature = ({ temperature, weatherState }) =>(
  <div className="weatherTemperatureCont">
    {
    getWeatherIcon(weatherState) // se manda a llamar o invoca a la funcion
    }
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`C°`}</span>
  </div>
);

//PropTypes
//validacion de parámetros de temperature y weatherState del componente WeatherTemperature
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired, //se espera un valor numero y se valida la propiedad temperature
  weatherState: PropTypes.string.isRequired,//isRequired se usa en caso de ingresar null o undefined y lo valide ya que sin este lo pasa por alto
};

export default WeatherTemperature;
