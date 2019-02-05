import React from 'react';
import {
    View, 
    Text
} from "react-native"

import Header from '../screen/Header'

class Like extends React.Component {
    render() {
        return(
            <View>
                <Header titleHeader='Like'/>
                <Text onPress={() => this.props.navigation.goBack()}> Like</Text>
            </View>

        )
    }
}
export default Like