import React, {Component} from 'react';
import {StyleSheet, Text,View} from 'react-native';
import { Modal, Portal,Button,Provider } from 'react-native-paper'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

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
    const { visible } = this.state

    return (

      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={this._hideModal}>
            <View style={styles.content}>
              <View style={styles.header}>
                <Icon
                  name="close"
                  size={20}
                  color={'#2bba8f'}
                  style={styles.closeIcon}
                  onPress={this.hideModal}
                 />
                <Text style={styles.title}>Firma electrónica</Text>
              </View>
              <View style={styles.signContent}>
                <SketchCanvas
                  style={styles.canvas}
                  strokeColor={'#020202'}
                  strokeWidth={2}
                  ref={ref => this.ref = ref}
                />
              </View>
            <View style={styles.btn}>
              <Text
                style={styles.txtBtn}
                onPress={()=> this.ref.clear()}>
                Borrar
              </Text>
              <Text style={styles.txtBtn}
                onPress={()=>
                   this.ref.getPaths().length == [] ? console.warn('No hay firma') : console.warn('Si hay firma')}>
                Aceptar
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
