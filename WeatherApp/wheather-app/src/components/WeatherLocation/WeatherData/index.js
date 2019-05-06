import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => ( /*doble destructuring*/
/*const {temperature, weatherState, humidity,wind} = data; con el doble destructuring no es necesario agregar esta linea*/
  <div className="weatherDataCont"> {/*className es como se declara para darle estilo*/}
    <WeatherTemperature
      temperature={temperature}
      weatherState ={weatherState}> {/*icono con los grados e icono referente del clima*/}
    </WeatherTemperature>
    <WeatherExtraInfo humidity={humidity} wind={wind}/>
  </div>
);

WeatherData.propTypes = {
  data: PropTypes.shape({ /*se usan las llaves porque es un objeto*/
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;
