import { url_base_weather, api_key } from './../constants/api_url';

 /*retornara la url con el parámetro de la ciudad que le asignemos */
const getUrlWeatherByCity = city =>{

  return `${url_base_weather}?q=${city}&appid=${api_key}`;
  
}

export default getUrlWeatherByCity;
