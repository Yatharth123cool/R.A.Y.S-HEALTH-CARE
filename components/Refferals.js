import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Refferals extends React.Component {    
goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }


render() {
  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        In future, when we expand this app we will shake hands with almost all the places mentioned in it. We will be doing this so that our customers or users of the app get discounts with the reference of our app. By doing this
      </Text>
      <Image style={styles.logo} source={require('../assets/images.png')} />
      <TouchableOpacity style={{marginTop:20, marginLeft: 130, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>
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
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  }
});
