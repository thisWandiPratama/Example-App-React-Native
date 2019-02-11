import React from 'react';
import {
    View, 
    Text,
    Image,
    StyleSheet
} from "react-native"

import Header from '../screen/Header'

const fotoProfile = require('../assets/wandiPratama.jpg')

class Profile extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Header titleHeader='Profile'/>
                    <Image source={fotoProfile} style={styles.ukuran}/>
                <Text> Developer by : Wandi Pratama</Text>
                <Text> WhatsAppp    : 0838 0389 7245</Text>
                <Text> Pondok IT Yogyakarta</Text>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    ukuran:{
        height:'50%',
        width:'100%',
        marginTop:30
    }
})
export default Profile  