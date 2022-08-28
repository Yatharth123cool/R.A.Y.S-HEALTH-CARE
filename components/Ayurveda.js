import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';



class Ayurveda extends React.Component {    

  constructor(){
    super()
    this.state={
      text:"",
      numbers:[]
    }
  }
  triggerCall=()=>{
    if(this.state.numbers.length != 10){
    alert("Insert correct number")
    }
  }
  
 triggerCalling= (s) => {
    // Check for perfect 10 digit length
   
    

    const args = {
      number: s,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };


   

  goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }

   goTocall=()=>{
    this.props.navigation.navigate("appNav6")
  }

  goTomom=()=>{
this.props.navigation.navigate("appNav3")
  }

  goTodad=()=>{
this.props.navigation.navigate("appNav4")
  }

  render() {
    return (
      <ScrollView>
       
      


<View style = {{ marginTop: 100, marginLeft: 30}}><Text style = {{fontSize: 38, fontWeight: "bold", fontFamily: 'sans-serif'}}>Ayurvedic Companies</Text></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('1800-843-5599')}}><Text>Aswini-hydrabad</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling(' 094042 92255')}}><Text>MUPPRA Kerala Ayurvedic Treatment Centre, Viman Nagara-pune</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button}  onPress={()=>{this.triggerCalling('080 4275 5563')}}><Text>Dr Vivek Sethi Ayurvedic Clinic-nashik</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button}  onPress={()=>{this.triggerCalling('087793 70996')}}><Text>Natura Hills Ayurveda Detox Centre-Mumbai</Text></TouchableOpacity></View>
      

       <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling(' 099897 59719')}}><Text>Sree Prathama Ayurvedam-bangalore</Text></TouchableOpacity></View>

       <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('079 2544 2449')}}><Text>Jiva Ayurveda Clinic - Mani Nagar, Ahmedabad, Gujarat</Text></TouchableOpacity></View>

      <TouchableOpacity style={{marginTop:20, marginLeft: 170, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#fed8b1",
  width: 200,
  height: 60,
  marginTop: 50,
  marginLeft: 145,
 alignItems: "center",
 justifyContent: "center",
 borderRadius: 200
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

export default Ayurveda;