import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView, Navigation} from 'react-native';
import App from "../App"

export default class Contact extends React.Component {    
goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }

render() {
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Wellness is the act of practicing healthy habits on a daily basis to attain better physical and mental health outcomes, so that instead of just surviving, you are thriving. Everybody needs it. This app contains a few activities and essentials. We have included everything under each section so that you get a better access. This app is meant for users of all over India. Thank you for downloading this app and we hope you like it and its functionality. I also guarantee you that all safety precautions are being taken.
      </Text>
      <Text style={styles.paragraph}> For more information and if any doubt on how it works see our video you can copy this link="https://www.youtube.com/watch?v=yue-k677eXU" </Text>
      <Image style={styles.logo} source={require('../assets/yoga_wellness.png')} />
       


        <TouchableOpacity style={{marginTop:20, marginLeft: 70, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>
    </View>
 </ScrollView>
 
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
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height:250,
    width: 250,
  }
});
