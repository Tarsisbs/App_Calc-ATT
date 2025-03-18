import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
 
    viewScroll:{
      flex:1,
      backgroundColor:'gray',
    },
   
    viewPrincipal:{
      alignItems:'center',
      justifyContent:'center',
      marginBottom: 20
    },
   
    viewImage:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'black',
      padding: 15,
      marginTop: 20,
      borderRadius: 15,
      shadowColor:'orange',
      shadowOpacity: 0.5,
      shadowOffset: {width: 0, height: 12},
      shadowRadius: 2,
      height: 600
    },
   
    textoPrincipal:{
      fontSize:40,
      fontWeight:'bold',
      color:'orange',
      backgroundColor:'black',
      width: 1920,
      textAlign:'center',
      shadowColor:'orange',
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 2,
      height: 70
    },
   
    imagem:{
      marginTop: -80,
      marginBottom: 20,
      width: 300,
      height: 250,
      borderRadius: 20
    },

    input:{
      width: 280,
      borderColor:"gray",
      borderWidth: 2,
      color: 'white',
      borderRadius: 6,
      marginTop: 10,
      padding: 10
    },

    botao:{
      backgroundColor: 'orange',
      color: 'white',
      padding: 10,
      borderRadius: 6,
      borderColor: 'gray',
      borderWidth: 2,
      width: 300,
      textAlign: 'center',
      marginTop: 20
    }
   
  })

  export default styles;