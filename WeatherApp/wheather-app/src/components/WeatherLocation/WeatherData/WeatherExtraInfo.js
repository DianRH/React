import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
 const WeatherExtraInfo = ({ humidity, wind }) => (//se toma los parámetro humidity y wind del componente WeatherData

   <div className="weatherExtraInfoCont">
      <span className="extraInfoText">{`Humedad: ${humidity} %`}</span> {/*template strings o literals Es6, hace el codigo mas legible*/}
      <span className="extraInfoText">{`Vientos: ${wind}`}</span>
   </div>
 );

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired, //ptn scceso fácil ya que instalamos el plugin reactjs code snippets
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
