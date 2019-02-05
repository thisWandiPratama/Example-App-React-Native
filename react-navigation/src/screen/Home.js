import React from 'react';
import {
    View, 
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native"

import Header from '../screen/Header' 
import Data from '../Config/Data.json' 


class Home extends React.Component {
    state = {
        Data
    }

    onButtomDetail=(dataItem) => {
        this.props.navigation.navigate('Search', {detil: dataItem })
    }
    render() {
        return(
           
            <View style={{flex:1}}>
                <Header titleHeader='Home'/>
                {/* <ListData onPress={() => this.props.navigation.navigate('Search')}/> */}
                {/* <Text onPress={() => this.props.navigation.goBack()}> Home</Text> */}
                <FlatList
                    data={this.state.Data}
                    keyExtractor={(index, item) => index.toString()}
                    renderItem={({ index, item }) => {
                        return (
                            <TouchableOpacity style={styles.headerTitleDanDescripsion} onPress={() => this.onButtomDetail([`${item.username}`, `${item.location}`])}> 
                                <View style={styles.headerTextTitleDanDescripsion} >
                                    <Text style={styles.textSetting}>{item.username}</Text>
                                </View>
                                {/* Khusus image yang ada url */}
                                <Image source={{uri:item.image}} style={styles.styleImage} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

        )
    }
}
const styles = StyleSheet.create({

    textSetting: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 3,

    },

    headerTitleDanDescripsion: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'greenyellow',
        justifyContent: 'center'

    },

    headerTextTitleDanDescripsion: {
        height: 60,
        paddingLeft: '5%',
        width: '80%',
        flexDirection: 'column',
        borderBottomWidth: 2,
        borderBottomColor: 'greenyellow',
        alignItems: 'flex-start',
    },
    styleImage: {
        height: 40,
        width: 40
    }


});

export default Home