import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const MainApp = (props) => {
    const name = '01 - Hey, this is my life'

    return (
        <View style={styles.container}>
        <View style={styles.innerContainer}/>
        <Text style={styles.title}>
            <Text style={styles.subtitle}>Playing :</Text> {name}
        </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        margin:10,
        marginTop:100,
        backgroundColor:'red',
        borderRadius:5
    },

    innerContainer:{
        backgroundColor:'green',
        height:50,
        width:150,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },

    title:{
        fontSize:18,
        fontWeight:'200',
        color:'white',
        backgroundColor:'transparent',
        position:'absolute',
        top:12,
        left:10
//    subtitle:{
//        fontSize:18,
//        fontWeight:'200',
 //       color:'white',
   //     backgroundColor:'transparent',
     //   position:'absolute',
       // top:12,
        //left:10

    }
})

export default MainApp
