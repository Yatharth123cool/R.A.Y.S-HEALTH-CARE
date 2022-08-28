import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

export default class FAQ extends React.Component {    
goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }


render() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        PLEASE EMAIL TO yatharthagrawal07@gmail.com
      </Text>
      <Image style={styles.logo} source={require('../assets/225744.png')} />
      <TouchableOpacity style={{marginTop:20, marginLeft: 70, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 300,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
