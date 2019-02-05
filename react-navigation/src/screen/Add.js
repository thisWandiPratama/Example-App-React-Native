import React from 'react';
import {
    View, 
    Text
} from "react-native"

import Header from '../screen/Header'

class Add extends React.Component {
    render() {
        return(
            <View>
                <Header titleHeader='Add'/>
                <Text onPress={() => this.props.navigation.goBack()}> Add</Text>
            </View>

        )
    }
}
export default Add