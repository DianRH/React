import React, {Component} from 'react';
import {StyleSheet, Text,View} from 'react-native';
import { Modal, Portal,Button,Provider } from 'react-native-paper'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = require('./style.js')

export default class Sign extends Component<Props> {
  constructor(props){
    super(props)
    this.state ={
      visible:false
    }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
  }

  showModal(){
    this.setState({
      visible: true
    })
  }

  hideModal(){
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible} = this.state

    return (

      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={this._hideModal}>
            <View style={styles.content}>
              <View style={styles.header}>
                <Icon
                  name="close"
                  size={30}
                  color={'#000'}
                    style={styles.close}
                  onPress={this.hideModal}

                 />
                <Text style={styles.text}>Firma electrónica</Text>
              </View>
              <View style={styles.margin}>
                <SketchCanvas
                  style={styles.canvas}
                  strokeColor={'#020202'}
                  strokeWidth={2}
                  ref={ref => this.ref = ref}
                />
              </View>
              <View style={styles.viewBtn}>
                <Text style={styles.borrar}
                  onPress={()=>
                    this.ref.getPaths().length == [] ?  console.warn('No haz firmado') : console.warn('si existe firma')}>
                  Confirmar
                </Text>
                <Text
                  style={styles.borrar}
                  onPress={()=> this.ref.clear()}>
                  Borrar
                </Text>
              </View>
            </View>
          </Modal>
        </Portal>

       <Button
         style={{ marginTop: 30 }}
         onPress={this.showModal}>
         Show
       </Button>
      </Provider>
    );
  }
}
