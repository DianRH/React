//Esto es un componente
import React,{Component} from 'react';
// importa el package de react para permitir trabajar con el dentro del archivo
import CircularProgress from '@material-ui/core/CircularProgress'; // libreria que contiene la cargar de la app (componente visual)
import { PropTypes } from 'prop-types';
import transformWeather from './../../services/transformWeather';
//import {api_weather} from './../../constants/api_url'; //se usan las llaves cuando al exportar no se utiliza la palabra "default"
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';// importamos la url que se va obtener los datos por el paámetro city
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
//se generan las constantes para que al mandar a llamar a los iconos no haya o los errores sean
//menores al nombre del icono
/*import {
  SUN,

} from './../../constants/weathers';



const data = {
  temperature: 30,
  weatherState: SUN,
  humidity: 30,
  wind: '35 m/s',
}*/

/*const data2 = {
  temperature: 10,
  weatherState: CLOUD,
  humidity: 10,
  wind: '5 m/s',
}*/
//FUNCTIONAL COMPONENT
// const WeatherLocation = () => ( //arrow function
//   <div className="weatherLocationCont">
//     <Location city={"Londres"}/> {/* city es un propiedades,se debe de utilizar donde el componente se encuentra*/}
//     <WeatherData data={data}> </WeatherData>
//   </div>
// );

//CLASS COMPONENT, es usado cuando se quiere utilizar una instancia del ciclo de vida
class WeatherLocation extends Component{

  constructor(props){ /*weatherLocation va aa aceptar propiedades con props*/
    super(props);  /*el superconstructor es el constructor del componente base (component)*/
    const {city} = props; /*se define la constante city que se va a obtener de props, por lo tanto una de la propiedades de props va a ser city*/
    this.state = {
      /*city: 'Buenos Aires',*/ city, /*Objectt property value shorthand (city:city, = city,)*/
      /*data: data,*/         data: null,
    };
    console.log("constructor"); // para visualizar en orden el ciclo de vida del COMPONENTE
  }
  //Eventos del ciclo de vida del COMPONENTE
  componentDidMount() {
    console.log("componentDidMount");
      this.handleUpdateClick(); // se mandan a llamar los datos del servidor solicitados
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

  }

/* fetch() aqui se buscan los datos y devuelve una promise que resuelve en response a esa petición sea o no correcta
  resolve es el parámetro */
/* return : retorna una nueva promise; body.json() hace acceder al body; el 2do then accedemos a los datos de la API*/
  handleUpdateClick = () => {

    const api_weather = getUrlWeatherByCity(this.state.city); //ahora los datos cargan de acuerdo a la ciudad

    fetch(api_weather).then( resolve => {

        return resolve.json();
      }).then(data => {
        const newWeather = transformWeather(data)
        console.log(newWeather);
        debugger;
        this.setState({
          data: newWeather
        });
      });

/*
    this.setState({ //setState para actualizar el estado del constructor en tiempo real
      //city: 'Buenos Aires 2',
      data: data2
    });*/
  }

  render(){
    console.log("render");
    const {onWeatherLocationCLick} = this.props; //se toma como propiedad
    const {city, data } = this.state; /*destructuring*/
    return(
      <div className="weatherLocationCont" onClick={onWeatherLocationCLick}> {/*onClick evento para detectar cuando se hace clic en el componente (onClick)*/}
        <Location city={city}/>  {/* city es una propiedad,se debe de utilizar donde el componente se encuentra*/}
        {/*operador ternario que es igual a un if*/}
        {data ?
            <WeatherData data={data}> </WeatherData> :
              <CircularProgress size={40}/>
        }
         {/*CircularProgress es un componente de la libreria material-ui*/}
        {/*<WeatherData data={data}> </WeatherData>
         <button onClick={this.handleUpdateClick}>Actualizar</button>*/} {/*la función onclick se asocia a una función
                                                                      se usa this. para hacer referecia a un metodo o funcion de un componente tipo clase*/}
      </div>
    );
  }
}

//PARTE DEL CICLO DE VIDA DE UN COMPONENTE
/*1.-constructor donde se establece el estado deL componente con (this.state)
despues se renderiza con el estado inicial del componente,despues se hace click al botón y
se ejecuta el evento onClick para invocar a la función handleUpdateClick y se ejecute el setState
que indica que va a actualizar el estado y se renderiza por segunda vez tomando el this.state del render
pero con los nuevos datos para que se muestren (actualización)
*/
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationCLick: PropTypes.func,
};
export default WeatherLocation;
// exporta por defecto el componente que se genero
// se invoca desde app.js
// se exporta para que se encuentre disponible para los demas archivos
