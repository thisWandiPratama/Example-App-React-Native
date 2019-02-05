import React from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Data from '../Config/Data.json'

class ListData extends React.Component {
    state = {
        Data
    }
    render() {
        console.log(this.state.Data)
        return (
            <View >
                <FlatList
                    data={this.state.Data}
                    keyExtractor={(index, item) => index.toString()}
                    renderItem={({ index, item }) => {
                        return (
                            <TouchableOpacity style={styles.headerTitleDanDescripsion} onPress ={this.props.onPress}>
                                <View style={styles.headerTextTitleDanDescripsion} >
                                    <Text style={styles.textSetting}>{item.username}</Text>
                                </View>
                                <Image source={item.Image} style={styles.styleImage} />
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

export default ListData

