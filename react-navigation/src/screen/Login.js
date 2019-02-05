import React from 'react';
import {
    View, 
    Text
} from "react-native"

class Login extends React.Component {
    render() {
        return(
            <View>
                <Text onPress={() => this.props.navigation.navigate('Home') }> Login</Text>
            </View>

        )
    }
}
export default Login