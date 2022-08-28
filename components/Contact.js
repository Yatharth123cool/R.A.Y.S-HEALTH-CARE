import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Contact extends React.Component {    
goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }


render() {
  return (
    <View style={styles.container}>
 
      <Text style={styles.paragraph}>
        
        Call- +91 8788207075
               Email-yatharthagrawal07@gmail.com
               
               Call- +91 9370787807
               Email-raynamewati0225@gmail.com
               
               Call- +91 9420693995
               Email-aakash.kedar.thakur@gmail.com
              
               Call- +91 8329067716
               Email-suhaninawale17@gmail.com
      </Text>
      
        
      
      
        
     
      <Image style={styles.logo} source={require('../assets/yoga_wellness.png')} />


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
    margin: 15,
    marginTop: 150,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 250,
    width: 250,
  }
});
