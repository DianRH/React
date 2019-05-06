import convert from 'convert-units';//se instalo la libreria para convertir unidades ahora se esta importando
//se generan las constantes para que al mandar a llamar a los iconos no haya o los errores sean
//menores al nombre del icono
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from './../constants/weathers';



  const getTemp = Kelvin =>{
    return Number(convert(Kelvin).from("K").to("C").toFixed(2)); /*sintaxis pertenece a la libreria:https://www.npmjs.com/package/convert-units
                                                                  Number(toFixed(numero)) es un método para definir el número de decimales en ES6*/
  }

    const getWeatherState = weather =>{
      const {id} = weather; {/*identificador para acceder al array id del objeto weather*/}

      if (id<300){  {/*las condiciones estan basadas en la Api de los iconos https://openweathermap.org/weather-conditions*/}
        return THUNDER;
      }else if (id<400){
              return DRIZZLE;
            }else if (id<600){
                    return RAIN;
                  }else if(id<700){
                          return SNOW;
                        }else if (id === 800){
                                return SUN;
                              }else
                                return CLOUD;
    }

    //vamos a traer los datos del servidor, los vamos a transformar y los vamos a establecer cono nuevos datos que se van a visualizar en el componente
    //funcion que va a recibir un parámetro, se va a transformar lo que viene del servidor a los datos que queremos transformar
    const transformWeather = weather_data =>{
      const { humidity, temp } = weather_data.main;
      const { speed } = weather_data.wind;
      const weatherState = getWeatherState(weather_data.weather[0]); {/*es un array de objetos = "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],*/}
      const temperature = getTemp(temp);    {/*temp ahora se transformo en temperature por lo tanto se aplica object literal
                                            al objeto data de abajo*/}
      //temperature pertenece o es asignado a temp asi es como se llama la propiedad en el servidor
    const data = {
      humidity,         /* Object property value shorthand */
      temperature,
      weatherState,
      wind: `${speed} m/s`,
    }
    return data;
  }

export default transformWeather;
//lo exportamos para hacerlo disponible
