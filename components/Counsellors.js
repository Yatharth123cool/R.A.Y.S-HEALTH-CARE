import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';



class Counsellors extends React.Component {    

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
       
      


<View style = {{ marginTop: 100, marginLeft: 60}}><Text style = {{fontSize: 46, fontWeight: "bold", fontFamily: 'sans-serif'}}>Counsellors</Text></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
        <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('080959 67889')}}><Text>The Mind Research Foundation-Bangalore</Text></TouchableOpacity></View>
      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('094907 08947')}}><Text>Aarathi Selvans Pause for Perspective-Hyderabad</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button}  onPress={()=>{this.triggerCalling('096078 99660')}}><Text>Sunshine Counselling and Therapy Center-nashik</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button}  onPress={()=>{this.triggerCalling('098200 99379')}}><Text>Rashi Laskari | Counselling Psychologist | Inner Light Counselling Centre-mumbai</Text></TouchableOpacity></View>
      

       <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={()=>{this.triggerCalling('098239 60972')}}><Text>Happy Life Counselling Services-pune</Text></TouchableOpacity></View>

     


      <TouchableOpacity style={{marginTop:20, marginLeft: 150, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#C2D5A8",
  width: 295,
  height: 80,
  marginTop: 50,
  marginLeft: 75,
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

export default Counsellors;