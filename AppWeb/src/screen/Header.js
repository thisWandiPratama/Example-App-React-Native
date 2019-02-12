import React from 'react'
import  {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from "react-native"

class Header extends React.Component{
  render() {
    return(
     
      <View style={{ height:50, width:'100%', backgroundColor:'blue', justifyContent:'center', alignItems:'center', borderBottomWidth:3, borderBottomColor:'greenyellow'}}>
        <Text style={{fontSize:20, color:'#fff'}}>Website Application</Text>
      </View>
    )
  }
}

export default Header