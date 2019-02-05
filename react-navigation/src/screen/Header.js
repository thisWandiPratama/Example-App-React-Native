import React from 'react';
import {
    View, 
    Text,
    StyleSheet
} from "react-native"

class Header extends React.Component {
    render() {
        return(
            <View style = {styles.header}>
                <Text style ={styles.text} > {this.props.titleHeader}</Text>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 50,
        width: '100%',
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        color:'#fff'
    }
})
export default Header