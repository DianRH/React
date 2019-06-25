import React, {Component} from 'react';
import {StyleSheet, Text,View} from 'react-native';
import { Modal, Portal,Button,Provider } from 'react-native-paper'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'

const styles = require('./style.js')

export default class Sign extends Component<Props> {
  constructor(props){
    super(props)
    this.state ={
      visible:false,
      error: false
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
    const { visible, error } = this.state

    return (
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={this.hideModal}>
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.title}>Firma electrónica</Text>
              </View>
              <View style={styles.signContent}>
                <SketchCanvas
                  style={styles.canvas}
                  strokeColor={'#020202'}
                  strokeWidth={2}
                  ref={ref => this.ref = ref}
                  onStrokeStart={()=>{
                      if(error){
                        this.setState ({
                          error: false
                        })
                      }
                  }}/>
                {error &&
                  <Text style={styles.error}>
                    Es necesario que firmes
                  </Text>
                }
              </View>
              <View style={styles.btn}>
                <Text
                  style={styles.txtBtn}
                  onPress={()=> this.ref.clear()}>
                  Borrar
                </Text>
                <Text
                  style={styles.txtBtn}
                  onPress={()=>{
                    if(this.ref.getPaths().length == 0){
                      this.setState({
                        error: true
                      })
                    }else{
                      this.setState({
                        error: false
                      })
                      this.hideModal()
                    }
                  }}>
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
