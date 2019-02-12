import React from 'react'
import {
View,
Text,
} from 'react-native'
import Header from './src/screen/Header'
import Pages from './src/screen/Home'



class App extends React.Component{

  render() {
    return(
      <View style={{flex:1}}>
        <Header/>
        <Pages/>
      </View>
    )
  }
}
export default App