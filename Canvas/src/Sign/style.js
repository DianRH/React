
module.exports = require('react-native').StyleSheet.create({

  canvas: {
    flex: 1,
  },
  content:{
    width: '85%',
    height: '80%',
    backgroundColor:'#fff',
    marginLeft:'7.5%',
  },
  title:{
    fontSize:18,
    color:'#2bba8f',
    fontWeight:'400',
  },
  header:{
    height:'14%',
    alignItems:'center',
    justifyContent: 'center',
    position:'relative'
  },
  signContent:{
    backgroundColor:'#eaeaea',
    marginHorizontal: 20,
    marginTop:10,
    height: '70%'
  },
  btn:{
  flexDirection:'row',
  justifyContent: 'flex-end',
  marginRight:20,
  marginVertical:9,
},
  txtBtn:{
    fontSize:18,
    marginLeft:20
  },
  error:{
    alignSelf:'center',
    marginBottom:15,
    fontSize:18
  }
});
