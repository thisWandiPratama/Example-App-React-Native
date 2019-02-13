import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native';




// Step Ke - 1
// Tampilan
// Selanjutnya, kita akan menambahkan komponen TextInput untuk menerima input dari user, 
// dan komponen Button sebagai interface aksi untuk menyimpan data.
//Ini step ke 1
class belajarAsyncStorage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            hobby: '',
            textName: '',
            textHobby: ''
        };





        // Step ke - 3
        // Implementasi Async Storage
        // Sampai langkah ini, data yang dimasukkan melalui TextInput kita simpan pada state sehingga jika aplikasi ini kita reload atau kita kill dari RAM, data tersebut akan hilang. Untuk itu, kita perlu menyimpan kedua data tersebut ke dalam Async Storage.

        // Kita implementasikan AsyncStorage di dua tempat. Pertama kita panggil fungsi getItem pada constructor. Tujuannya untuk memeriksa apakah ada data nama dan hobi pada perangkat ketika pertama kali membuka aplikasi. Jika ada, maka kita masukkan data tersebut ke state nama dan hobi. Fungsi getItem ini terdiri atas 2 parameter. Parameter pertama adalah key berupa string yang menjadi penunjuk data, sedangkan parameter kedua adalah callback yang merupakan fungsi yang dipanggil setelah AsyncStorage selesai mencari data dengan key yang dicari.

        // Implementasi AsyncStorage yang kedua kita letakkan pada fungsi saveData dengan memanggil fungsi setItem untuk menyimpan data pada perangkat. Fungsi ini terdiri dari 2 parameter wajib dan 1 parameter opsional. Parameter pertama adalah key dari data yang ingin disimpan, parameter kedua adalah value yang mana adalah data itu sendiri. Adapun parameter ketiga adalah callback yang akan dipanggil setelah proses penyimpanan selesai.

        // Pada tahap ini, ketika kita sudah menyimpan data nama dan hobi, saat aplikasi di reload atau di kill dari RAM, maka data yang tadinya kita simpan akan muncul kembali.

        // Ini Step ke - 3
  //       AsyncStorage.getItem('name', (error, result) => {
  //         if (result) {
  //             this.setState({
  //                 name: result
  //             });
  //         }
  //     });
  //     AsyncStorage.getItem('hobby', (error, result) => {
  //         if (result) {
  //             this.setState({
  //                 hobby: result
  //             });
  //         }
  //     });
  // }
   



  
  
  

// Step Ke - 4
//   Optimasi
// Kita juga bisa menyimpan data berbentuk object ke dalam AsyncStorage. Namun perlu diingat bahwa value yang bisa diterima oleh AsyncStorage adalah data bertipe string. Oleh karena itu, kita perlu mengubah object yang ingin dimasukkan ke dalam bentuk string.
// Perhatikan bagaimana kita menyimpan object ‘data’ dengan cara mengubahnya terlebih dahulu menjadi string dengan memanfaatkan fungsi stringify dari API JSON.
// Ini Step ke - 4  
  AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    name: resultParsed.name,
                    hobby: resultParsed.hobby
                });
            }
        });
    }



    

    // Step Ke - 2
    // Implementasi Simpan Data
    // Setelah mendapatkan tampilan sederhana seperti di atas, kita mulai untuk mengimplementasikan fungsi menyimpan data. Behavior yang kita inginkan adalah ketika tombol Simpan ditekan, maka data nama dan hobi yang ditulis pada text input akan muncul pada kolom nama dan hobi di atasnya. Untuk itu kita buat fungsi saveData untuk diletakkan pada props onPress yang ada di komponen Button .
    // ini step ke - 2
  //   saveData() {
  //     let name = this.state.textName;
  //     let hobby = this.state.textHobby;
  //     this.setState({
  //          name: name,
  //          hobby: hobby
  //     });
  //     alert('Data tersimpan');
  // }





// Ini Step ke - 3  
    // saveData() {
    //   let name = this.state.textName;
    //   let hobby = this.state.textHobby;
    //   AsyncStorage.setItem('name', name);
    //   AsyncStorage.setItem('hobby', hobby);

    //     this.setState({
    //         name: name,
    //         hobby: hobby
    //     });

    //     alert('Data tersimpan');
    // }



// Ini Step ke - 4  (Optimasi)
saveData() {
  let name = this.state.textName;
  let hobby = this.state.textHobby;
  let data = {
      name: name,
      hobby: hobby
  }

  AsyncStorage.setItem('user', JSON.stringify(data));

  this.setState({
      name: name,
      hobby: hobby
  });

  alert('Data tersimpan');
}


    //Ini Step ke - 1
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Biodata Santri Pondok Programmer
                </Text>
                <Text style={styles.instructions}>
                    Nama: {this.state.name}
                </Text>
                <Text style={styles.instructions}>
                    Hobi: {this.state.hobby}
                </Text>
                <TextInput style={styles.textInput}
                    onChangeText={(textName) => this.setState({textName})}
                    placeholder='Nama Santri'
                />
                <TextInput style={styles.textInput}
                    onChangeText={(textHobby) => this.setState({textHobby})}
                    placeholder='Hobi Santri'
                />
                <Button
                    title='Simpan'
                    onPress={this.saveData.bind(this)}
                />
            </View>
        );
    }
}


// Ini Step ke - 1
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9370DB',
    padding: 16,
    paddingTop: 32
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color:'#7FFF00'
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
    
  },
  textInput: {
    height: 35,
    width:'80%',
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8
  }
});

export default belajarAsyncStorage