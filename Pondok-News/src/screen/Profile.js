import React from 'react';
import {
    View, 
    Text
} from "react-native"

import Header from '../screen/Header'

class Profile extends React.Component {
    render() {
        return(
            <View>
                <Header titleHeader='Profile'/>
                <Text> Profile</Text>
            </View>

        )
    }
}
export default Profile