import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';//se importan los component demos que se van a utilizar
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'; //clase que nos permite manejar el tamaño de la tipografia
import Toolbar from '@material-ui/core/Toolbar';
//import WeatherLocation from './components/WeatherLocation';// se importo el componente WeatherLocation
import { Grid, Row, Col } from 'react-flexbox-grid';
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

  handleSelectedLocation = city => {
      console.log(`handleSelectionLocation ${city}`);
  }
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'> {/*color='heredado'*/}
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            {/*<WeatherLocation city={"Alemania,deu"}></WeatherLocation> */}{/*Este es el nombre del tag*/}
            <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList> {/*se cambia por LocationList para mostrar una lista de diferentes ciudades,se incorpora el parámetro cities del archivo LocationList*/}
          </Col>
          <Col xs={12} md={6}>
            <div className="details"></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
