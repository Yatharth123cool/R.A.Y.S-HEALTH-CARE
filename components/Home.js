import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';



class Mainscreen extends React.Component {    

  constructor(){
    super()
    this.state={
      text:"",
      numbers:[]
    }
  }
    
    goToSpa= ()=>{
this.props.navigation.navigate("appNav3")
  }

  goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }

   goToFitnessStudios=()=>{
    this.props.navigation.navigate("appNav4")
  }

  goToTherapists=()=>{
this.props.navigation.navigate("appNav5")
  }

  goToCounsellors=()=>{
this.props.navigation.navigate("appNav7")
  }

  goToAyurveda=()=>{
this.props.navigation.navigate("appNav6")
  }

  goToDietician=()=>{
this.props.navigation.navigate("appNav8")
  }

goToPharmacies=()=>{
this.props.navigation.navigate("appNav9")
  }
  
  
  render() {
    return (
      <ScrollView>
       
      




      <View style= {{marginTop: 100, marginLeft: 10}}>
      <TouchableOpacity style= {styling.Button} onPress={this.goToSpa}><Image style ={styling.Image} source = {require('../assets/spa.png')} /><Text>Spa</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: 10}}>
      <TouchableOpacity style= {styling.Button} onPress={this.goToFitnessStudios}><Image style ={styling.Image} source = {require('../assets/zumba.png')} /><Text>Fitness Studios</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: 10}}>
      <TouchableOpacity style= {styling.Button}  onPress={this.goToTherapists}><Image style ={styling.Image} source = {require('../assets/brain.png')} /><Text>Therapists</Text></TouchableOpacity></View>

      <View style= {{marginTop: 0, marginLeft: 10}}>
      <TouchableOpacity style= {styling.Button}  onPress={this.goToCounsellors} ><Image style ={styling.Image} source = {require('../assets/counsel.png')} /><Text>Counsellors</Text></TouchableOpacity></View>
      

       <View style= {{marginTop: -10, marginLeft: 10}}>
      <TouchableOpacity style= {styling.Button} onPress={this.goToDietician}><Image style ={styling.Image} source = {require('../assets/diet.png')} /><Text>Dieting</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: 10}}>
      <TouchableOpacity style= {styling.Button} onPress= {this.goToPharmacies}><Image style ={styling.Image} source = {require('../assets/pharmacy.jpg')} /><Text>Pharmacies</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: 10}}>
      <TouchableOpacity style= {styling.Button} onPress= {this.goToAyurveda}><Image style ={styling.Image} source = {require('../assets/ayurveda.jfif')} /><Text>Ayurveda</Text></TouchableOpacity></View>

      <TouchableOpacity style={{marginTop:30, marginLeft: 190, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#BAE1FF",
  width: 200,
  height: 60,
  marginTop: 50,
  marginLeft: 115,
 alignItems: "center",
 justifyContent: "center",
 borderRadius: 190
},
Image:{
   width: 80,
   height: 80, 
 },

Add:{
backgroundColor: "#ffffed",
  width: 300,
  height: 40,
  marginTop: 10,
  marginLeft: 30,
 alignItems: "center",
 justifyContent: "center",
 borderRadius: 200
},


textInputStyle:{
marginTop: 10, marginLeft: 10, width: "80%", height: 40, alignSelf: "center", textAlign: "center", borderWidth: 1
}



})

export default Mainscreen;