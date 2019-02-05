import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image
} from "react-native"

import Header from '../screen/Header'

class Search extends React.Component {
    render() {
        return(
            <View>
                <Header titleHeader='Pondok News' />
                <View>
                    <Text styles={styles.judul} > {this.props.navigation.state.params.detil[0]}</Text>
                    <Text styles={styles.judul} > {this.props.navigation.state.params.detil[1]}</Text>
                    {/* <Image source={{ uri: this.props.navigation.state.params.detil[1] /> */}

                </View>

            </View>
           
        )
    }
}

const styles = StyleSheet.create ({
    judul:{
        fontSize:25,
        color:'#000000',
    },

})
export default Search