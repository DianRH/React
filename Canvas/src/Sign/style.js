
module.exports = require('react-native').StyleSheet.create({

  canvas: {
    flex: 1,
  },
  content:{
    width: '95%',
    height: '80%',
    backgroundColor:'#fff',
    //'#d6d6d6'
    marginLeft:'2.5%',
  },
  text:{
    fontSize:18,
   color: 'white',
   fontWeight:'400'
  },
  header:{
    height:'15%',
    backgroundColor: '#2bba8f',
    alignItems:'center',
    justifyContent: 'center'
  },
  margin:{
    borderColor: '#d6d6d6',
    borderWidth: 1,
    margin: 8,
      height: '70%',
  },
  close:{
    position: 'absolute',
  top: 0,
  left: 0,
  marginLeft:10,
  zIndex: 2
  },
  viewBtn:{
  flexDirection:'row',
  justifyContent: 'flex-end',
  paddingRight:9,
  alignItems:'center',
  },
  borrar:{
    fontSize:17,
    marginLeft:18
  }
});
