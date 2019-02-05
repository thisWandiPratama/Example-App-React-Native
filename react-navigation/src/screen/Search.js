import React from 'react';
import {
    View, 
    Text
} from "react-native"

import Header from '../screen/Header'

class Search extends React.Component {
    render() {
        return(
            <View>
                <Header titleHeader='Search'/>
                <Text onPress={() => this.props.navigation.goBack()}> {this.props.navigation.state.params.detil[1]}</Text>
            </View>

        )
    }
}
export default Search