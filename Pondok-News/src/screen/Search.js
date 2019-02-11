import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native"

import Header from '../screen/Header'

class Search extends React.Component {
    render() {
        return (
            <View >
                <Header titleHeader='Pondok News' />
                <ScrollView>
                    <View style={styles.contantainer}>
                        <Text style={styles.titleArtikel} > {this.props.navigation.state.params.detil[0]}</Text>
                        <Text style={styles.lokasiPenulis} > {this.props.navigation.state.params.detil[1]}</Text>
                        <View style={styles.viewImages}>
                            <Image source={{ uri: this.props.navigation.state.params.detil[2] }} style={styles.ukuranGambar} />
                        </View>
                        <Text style={styles.tampilanArtikel} > {this.props.navigation.state.params.detil[4]}</Text>
                    </View>
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    contantainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleArtikel: {
        fontSize: 25,
        color: '#000000',
    },
    lokasiPenulis: {
        fontSize: 10,
        marginBottom: 20,
        paddingLeft: 5
    },
    ukuranGambar: {
        height: 200,
        width: '80%',
        marginBottom: 4
    },
    viewImages: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tampilanArtikel: {
        fontSize: 15,
        textAlign: 'auto'
    }

})

export default Search

