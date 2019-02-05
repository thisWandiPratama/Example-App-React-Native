import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Home from "../screen/Home";
import Search from "../screen/Search";
import Add from '../screen/Add'
import Like from '../screen/Like'
import Profile from '../screen/Profile'

// export default createStackNavigator({
//     Login:{
//         screen: Login
//     },
//     Home:{
//         screen: Home
//     },
//     Profile:{
//         screen: Profile
//     }
// }, {
//     headerMode:'none'
// })

const homeIcon = require('../assets/home.png')
const searchIcon = require('../assets/search.png')
const addIcon = require('../assets/plus.png')
const likeIcon = require('../assets/like.png')
const profileIcon = require('../assets/profile.png')


export default createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image source={homeIcon} style={[styles.icon, { tintColor }]} />
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image source={searchIcon} style={[styles.icon, { tintColor}]} />
            )
        }
    },
    Add: {
        screen: Add,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image source={addIcon} style={[styles.icon, { tintColor  }]} />
            )
        }
    },
    Like: {
        screen: Like,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image source={likeIcon} style={[styles.icon, { tintColor  }]} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image source={profileIcon} style={[styles.icon, { tintColor }]} />
            )
        }
    }
}, {
    tabBarOptions:{
        activeTintColor:"#00b4d5",
        inactiveTintColor:'#babec4',
        indicatorStyle : { backgroundColor:'red'},
        labelStyle:{
            fontSize:14
        },
        style:{
            backgroundColor: '#fff',
            height: 60,
            padding: 5
        },
        showLabel: false
    }
})

const styles = StyleSheet.create({
    icon:{
        height: 20,
        width: 20
    }
})