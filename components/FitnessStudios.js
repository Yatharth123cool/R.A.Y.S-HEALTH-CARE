import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';



class FitnessStudios extends React.Component {    

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
       
      


<View style = {{ marginTop: 100, marginLeft: 50}}><Text style = {{fontSize: 48, fontWeight: "bold", fontFamily: 'sans-serif'}}>Fitness Studios</Text></View>

      <View style= {{marginTop: -10, marginLeft: 0}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('98238 18612')}}><Text>V Fitness Club Nashik
</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: 0}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('099309 26422')}}><Text>X ANIMO Fitness mumbai
</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: 0}}>
      <TouchableOpacity style= {styling.Button}  onPress={()=>{this.triggerCalling('92463 78915')}}><Text>Viva Pilates Hyderabad</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: 0}}>
      <TouchableOpacity style= {styling.Button}  onPress={()=>{this.triggerCalling('020 4861 3524')}}><Text>ABS FITNESS CAMP. PUNE
</Text></TouchableOpacity></View>
      
       <View style= {{marginTop: -10, marginLeft: 0}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('070262 76888')}}><Text>
Iconic Fitness bangalore</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: 0}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('0253 664 4302')}}><Text>Intense Gym Nashik</Text></TouchableOpacity></View>

      <TouchableOpacity style={{marginTop:20, marginLeft: 150, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#E0D7FF",
  width: 200,
  height: 60,
  marginTop: 50,
  marginLeft: 115,
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

export default FitnessStudios;