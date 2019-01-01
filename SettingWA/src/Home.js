// Masukkan React ke Dalam Project
import React from 'react'
// Masukan Component yang akan di gunakan pada project
import { Text, 
   View, 
   StyleSheet, 
   Image, 
   StatusBar, 
   TouchableOpacity, 
   TouchableNativeFeedback, 
   TouchableHighlight, 
   ImageBackground } from 'react-native'
 



//Class component untuk 
class App extends React.Component {
   render() {
      // Membuat function Props untuk text 'Settings'
      FuctionPropsSetting = () => (
         <View>
            <Text>Hello {this.props.name}!</Text>
         </View>

      )
      return (
         //menentukan container/wadah/tampilan awal biasa digunakan untuk menentukan background pada aplikasi
         <ImageBackground style={{width:'100%', height:'100%'}} source={require('./asset/backgroungSetting.jpg')}>
         <View style={styles.container}>
         {/* menentukan background pada StatusBar */}
         <StatusBar backgroundColor='red'/>
               {/* Membuat Header Setting */}
               <View style={styles.headerSetting}>
                  {/* Efek Pada button/text/icon */}
                  <TouchableOpacity>
                  {/* memasukkan iconKembali di headerSetting */}
                  <Image style={styles.iconKembali} source={require('./asset/iconKembali.png')} />
                  {/* Menambahkan sebauh text di samping kanan iconKembali di headerSetting */}
                  </TouchableOpacity>
                  <View >
                      {/* Efek Pada button/text/icon */}
                     <TouchableNativeFeedback>
                        {/* Memanggil function props text settings */}
                        <Text style={styles.textHeader}>{FuctionPropsSetting.name='Settings'}</Text> 
                     </TouchableNativeFeedback>  
                  </View> 
               </View>
               {/* Untuk Profile */}
               <View>
                  {/* Efek Pada button/text/icon */}
                  <TouchableOpacity>
                  <View style={styles.headerProfile}>
                     <Image style={styles.iconProfile} source={require('./asset/iconProfile.png')} />
                     <View>
                        {/* Efek Pada button/text/icon */}
                        <TouchableOpacity>
                        <Text style={styles.textAll}>Wandi Pratama</Text>
                        <Text style={styles.textStatus}>Al-Quran & As-Sunnah</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  </TouchableOpacity>
                  {/* Efek Pada button/text/icon */}
                  <TouchableOpacity>
                  {/* Untuk Akun */}
                  <View style={styles.headericonKunci}>
                   {/* Efek Pada button/text/icon */}
                   <TouchableOpacity>
                     <Image style={styles.iconKunci} source={require('./asset/iconKunci.png')} />
                     </TouchableOpacity>
                     <View style={styles.headerTextAkun} >
                     {/* Efek Pada button/text/icon */}
                   <TouchableOpacity>
                        <Text style={styles.textAkun}>Akun</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  </TouchableOpacity>
                  {/* Efek Pada button/text/icon */}
                  <TouchableOpacity>
                  {/* Untuk Chat */}
                  <View style={styles.headericonKunci}>
                      {/* Efek Pada button/text/icon */}
                     <TouchableOpacity>
                     <Image style={styles.iconKunci} source={require('./asset/iconChat.png')} />
                     </TouchableOpacity>
                     <View style={styles.headerTextAkun} >
                        {/* Efek Pada button/text/icon */}
                        <TouchableOpacity>
                        <Text style={styles.textAkun}>Chat</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  </TouchableOpacity>
                  {/* Efek Pada button/text/icon */}
                  <TouchableOpacity>
                  {/* Untuk Notifikasi */}
                  <View style={styles.headericonKunci}>
                     {/* Efek Pada button/text/icon */}
                     <TouchableOpacity>
                     <Image style={styles.iconKunci} source={require('./asset/iconBell.png')} />
                     </TouchableOpacity>
                     <View style={styles.headerTextAkun} >
                        {/* Efek Pada button/text/icon */}
                        <TouchableOpacity>
                        <Text style={styles.textAkun}>Notifikasi</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  </TouchableOpacity>
                  {/* Efek Pada button/text/icon */}
                  <TouchableOpacity>
                  {/* Untuk Penggunaan Data dan Penyimpanan */}
                  <View style={styles.headericonKunci}>
                     {/* Efek Pada button/text/icon */}
                     <TouchableOpacity>
                     <Image style={styles.iconKunci} source={require('./asset/iconPenggunaanData.png')} />
                     </TouchableOpacity>
                     <View style={styles.headerTextAkun} >
                        {/* Efek Pada button/text/icon */}
                        <TouchableOpacity>
                        <Text style={styles.textAkun}>Penggunaan Data dan Penyimpanan</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  </TouchableOpacity>
                  {/* Efek Pada button/text/icon */}
                  <TouchableOpacity>
                  {/* Untuk Undang Teman */}
                  <View style={styles.headericonKunci}>
                     {/* Efek Pada button/text/icon */}
                     <TouchableOpacity>
                     <Image style={styles.iconKunci} source={require('./asset/iconUndangTeman.png')} />
                     </TouchableOpacity>
                     <View style={styles.headerTextAkun} >
                     {/* Efek Pada button/text/icon */}
                     <TouchableOpacity>
                        <Text style={styles.textAkun}>Undang Teman</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
                  </TouchableOpacity>
                  {/* Efek Pada button/text/icon */}
                  <TouchableHighlight onLongPress={() => alert('Ini Button Bantuan')}>
                  {/* Untuk Bantuan */}
                  <View style={styles.headericonKunci}>
                  <TouchableHighlight onLongPress={() => alert('Ini Icon Bantuan')}>
                     <Image style={styles.iconKunci} source={require('./asset/iconBantuan.png')} />
                  </TouchableHighlight>
                     <View style={styles.headerTextAkun} >
                        <TouchableHighlight onLongPress={() => alert('Ini Text Bantuan')}>
                        <Text style={styles.textAkun}>Bantuan</Text>
                        </TouchableHighlight>
                     </View>
                  </View>
                  </TouchableHighlight>
               </View>
            </View>
            </ImageBackground>
            
            

      )
   }
}
export default App

// Script Style
const styles = StyleSheet.create({
   container: {
      flex: 1,

   },

   textHeader: {
      color: 'white',
      fontSize: 25,
      paddingLeft: 9
   },

   textAll: {
      color: 'white',
      fontSize: 25,
      paddingLeft: '5%',
   },


   textStatus: {
      color: 'white',
      fontSize: 15,
      paddingLeft: '10%',
   },

   textAkun: {
      color: 'white',
      fontSize: 20,
      paddingLeft: 3,

   },

   iconKembali: {
      width: 25,
      height: 25,
      paddingLeft: 15,
      alignItems: 'center'
   },

   iconProfile: {
      width: 60,
      height: 60,
      paddingLeft: 25
   },

   iconKunci: {
      width: 40,
      height: 40,
      paddingLeft: 5,
   },
   headerSetting: {
      height: '8%',
      paddingLeft: '5%',
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderBottomWidth: 2,
      borderBottomColor: 'greenyellow',
      alignItems: 'center',
   },

   headerProfile: {
      height: 90,
      paddingLeft: '5%',
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderBottomWidth: 2,
      borderBottomColor: 'greenyellow',
      alignItems: 'center',
   },

   headericonKunci: {
      height: 60,
      paddingLeft: '5%',
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderBottomColor: 'greenyellow',
      alignItems: 'center',
   },

   headerTextAkun: {
      height: 60,
      paddingLeft: '5%',
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderBottomWidth: 2,
      borderBottomColor: 'greenyellow',
      alignItems: 'center',
   },


});

