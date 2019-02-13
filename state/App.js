//Import React 
import React from 'react'
//import komponen yang akan di gunakan 
import {
  View,
  Text,
  TextInput
 } from 'react-native'

//buat class dengan belajarState

class belajarState extends React.Component {
  //menginisialisasikan state di constructor
  constructor(props) {
    super(props)
    this.state = {
     dataStateAwal : 'Wandi Pratama Sedang Belajar State',
    
     //ini untuk TextInput
     //Sekarang kitakan akan menggabungakan TextINput dengan state
     //kita hanya perlu membuat key state nya saja
     dataStateTextInputt: ''
    }
  }

  // Membuat function untuk merubah menilai state awal menggunakan setState
  //Ini function menggunakan ES6 yang disebut dengan arrow function, silakan belajar jika belum tau  
  updateDataStateAwal = () => this.setState({ dataStateAwal: 'Belajar state itu mudah sekali loh...'})
  render() { 
    return (  
      <View>
        {/* onPress berfunsi ketika nilai dataStateAwal ditekan maka akan terjadi proses ekselusi arros function yang telah tadi kita buat sebelum kemudian akan ditampilkan layar hp */}
        <Text onPress = {this.updateDataStateAwal}>
            {this.state.dataStateAwal}
        </Text>

        {/* Mengolah data yang di inputkan oleh user melalu TextINput */}
        <TextInput onChangeText = {(dataTextYangInputkanOlehUser) => {this.setState({dataStateTextInputt:dataTextYangInputkanOlehUser})}}/>
        {/* Menampilakan data yang di olah sebelumnya ke layar HP dengan Text */}
        <Text>
          Saya Wandi Pratama sedang belajar {this.state.dataStateTextInputt}
        </Text>
      </View>
    );
  }
}
 
export default belajarState;
