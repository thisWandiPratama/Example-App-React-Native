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
                <Header titleHeader='Pondok News'/>
                {/* <ListData onPress={() => this.props.navigation.navigate('Search')}/> */}
                {/* <Text onPress={() => this.props.navigation.goBack()}> Home</Text> */}
                <FlatList
                    data={this.state.Data}
                    keyExtractor={(index, item) => index.toString()}
                    renderItem={({ index, item }) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => this.onButtomDetail([`${item.username}`, `${item.location}`, `${item.image}`, `${item.diskripsi}`])}>
                                    <View style={styles.viewJudul}>
                                        <Text style={styles.judul}>{item.username}</Text>
                                        <Text style={styles.location}>{item.location}</Text>
                                    </View>
                                    <View style={styles.viewImages}>
                                        <Image source={{ uri: item.image}}  style={styles.styleImage} />
                                    </View>
                                    <View style={styles.diskripsi}>
                                        <Text>{item.diskripsi}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>

        )
    }
}

export default Home

const styles = StyleSheet.create ({
    judul:{
        fontSize:25,
        color:'#000000',
        paddingLeft:5
    },
    viewImages:{
        justifyContent:'center',
        alignItems:'center'
    },
    styleImage:{
        height:200,
        width:'80%',
        marginBottom:4
    },
    location:{
        fontSize:10,
        marginBottom:20,
        paddingLeft:5

    },
    diskripsi:{
        borderBottomWidth:1,
        borderBottomColor:'green',
        paddingLeft:5

    }
})
// 
//                                 <View style={styles.headerTextTitleDanDescripsion} >
//                                     <Text style={styles.textSetting}>{item.username}</Text>
//                                 </View>
//                                 {/* Khusus image yang ada urlr */}
//                                 <Image source={{uri:item.image}} style={styles.styleImage} />
//                             </TouchableOpacity>