import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import App from "../App"

export default class Startscreen extends React.Component {
 goToMain=()=>{
   this.props.navigation.navigate("appNav2")
}

   goToAbout=()=>{
    this.props.navigation.navigate("appNav10")
   }

    goToContact=()=>{
   this.props.navigation.navigate("appNav11")
}
 
 goToFAQ=()=>{
   this.props.navigation.navigate("appNav12")
}

goToRefferals=()=>{
   this.props.navigation.navigate("appNav13")


}
  render() {
    return (

      <View>
      <TouchableOpacity><Text style= {news.Text}>R.A.Y.S Health Care </Text></TouchableOpacity>
      <Text style= {{marginLeft: 185, marginTop: 100, fontWeight: "bold", fontSize: 28}}>Menu</Text>
      <TouchableOpacity onPress= {this.goToMain}><Text style= {news.Text1}>Services </Text></TouchableOpacity>
        <TouchableOpacity onPress= {this.goToAbout}><Text style= {news.Text2}>About Us </Text></TouchableOpacity>
        <TouchableOpacity onPress= {this.goToContact}><Text style= {news.Text3}>Contact Us </Text></TouchableOpacity>
        <TouchableOpacity onPress= {this.goToFAQ}><Text style= {news.Text4}>FAQs </Text></TouchableOpacity>
        <TouchableOpacity onPress= {this.goToRefferals}><Text style= {news.Text5}>Refferals </Text></TouchableOpacity>
        <Image style={{width: 300, height: 300, marginLeft: 80, marginTop: 30}}
        source={require('../assets/yoga.png')}
      />
        <Image style={{width: 80, height: 80, marginLeft: 190, marginTop: -270}}
      
      />
     </View>
    )
    }
}
const news = StyleSheet.create({
  Text:{
    backgroundColor: "#F9A6C2", 
    color: "black",
   marginLeft: 100,
   marginRight: 120,
   marginTop: 120,
   fontSize: 30,
   fontFamily: 'monospace',
   textAlign: "center", 
   width: 250,
   height: 90,
   justifyContent: "center",
   borderRadius: 80,
 },
 
 Text1:{
    backgroundColor: "#DD0000", 
    color: "black",
   marginLeft: 100,
   marginRight: 120,
   marginTop: 10,
   fontSize: 24,
   fontFamily: 'monospace',
   textAlign: "center", 
   width: 250,
   height: 30,
   justifyContent: "center",
   borderRadius: 50,
 },
 
 Text2:{
    backgroundColor: "#FE6230", 
    color: "black",
   marginLeft: 100,
   marginRight: 120,
   marginTop: 10,
   fontSize: 24,
   fontFamily: 'monospace',
   textAlign: "center", 
   width: 250,
   height: 30,
   justifyContent: "center",
   borderRadius: 50,
 },

Text3:{
    backgroundColor: "#FEF600", 
    color: "black",
   marginLeft: 100,
   marginRight: 120,
   marginTop: 10,
   fontSize: 24,
   fontFamily: 'monospace',
   textAlign: "center", 
   width: 250,
   height: 30,
   justifyContent: "center",
   borderRadius: 50,
 },

 Text4:{
    backgroundColor: "#00BB00", 
    color: "black",
   marginLeft: 100,
   marginRight: 120,
   marginTop: 10,
   fontSize: 24,
   fontFamily: 'monospace',
   textAlign: "center", 
   width: 250,
   height: 30,
   justifyContent: "center",
   borderRadius: 50,
 },

Text5:{
    backgroundColor: "#009BFE", 
    color: "black",
   marginLeft: 100,
   marginRight: 120,
   marginTop: 10,
   fontSize: 24,
   fontFamily: 'monospace',
   textAlign: "center", 
   width: 250,
   height: 30,
   justifyContent: "center",
   borderRadius: 50,
 },

 Text6:{
    backgroundColor: "#a54bff", 
    color: "black",
   marginLeft: 100,
   marginRight: 120,
   marginTop: 10,
   fontSize: 24,
   fontFamily: 'monospace',
   textAlign: "center", 
   width: 250,
   height: 30,
   justifyContent: "center",
   borderRadius: 50,
 },


 Image:{
   width: 100,
   height: 100, 
 },

 Image1:{
    width: 100,
   height: 100, 
   marginLeft: 190,
   marginTop: 40,
 },
 
 Image2:{
   width: 110,
   height: 110, 
   marginLeft: 290,
   marginTop: -460,
   borderRadius: 200
 },

 Image3:{
    width: 110,
   height: 110, 
   marginLeft: 30,
   marginTop: -160,
 }
  }
)