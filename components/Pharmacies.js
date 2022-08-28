import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';



class Pharmacies extends React.Component {    

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
       
      
<View style = {{ marginTop: 100, marginLeft: 60}}><Text style = {{fontSize: 42, fontWeight: "bold", fontFamily: 'sans-serif'}}>PHARMACIES</Text></View>



      <View style= {{marginTop: 30, marginLeft: 10}}>
     <Text>ALLIED PHAARMA</Text><Text>Rd Number 12, NBT Nagar, Banjara Hills, Hyderabad, Telangana 500034
     </Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('9246213877')}}><Text>Call Now</Text></TouchableOpacity></View>

   <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Wellness Forever</Text><Text>717/1B/23/1A, plot no.1A/1 Patil Mala S.K.Niwas, Patil Lane no.1 HPT, College Rd, opp. Maleria stop, next to Tushar misal, Nashik, Maharashtra 422005</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('0253 231 2678')}}><Text>Call Now</Text></TouchableOpacity></View>


      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Apollo Pharmacy Santacruz East TPS III</Text><Text>Plot No 59/D, Shop No 1, Santacruz Paradise, 4, &7th Road, Santacruz East, Mumbai, Maharashtra 400056</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('077100 90135')}}><Text>Call Now</Text></TouchableOpacity></View>

      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Apollo Pharmacy S.V. Road, Bandra West</Text><Text> Veena Nagar CHS, 234, Shop No 1 & 2 Bandra Geethanjali, SV Rd, near HP Petrol Pump, Bandra West, Mumbai, Maharashtra 400050</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('077100 90117')}}><Text>Call Now</Text></TouchableOpacity></View>

      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Apollo Pharmacy Pune Viman Nagar</Text><Text>Shop No 8, Gera Enclave, Ganapathi Chowk, Sainik Nagar, Clover Park, Viman Nagar, Pune, Maharashtra 411014</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('077009 50215')}}><Text>Call Now</Text></TouchableOpacity></View>

<View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Apollo Pharmacy Pune Aundh</Text><Text>Haveli, Sayali Terraces, Shop No 1, Plot No 94, Pune, Maharashtra 411007</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('077100 90175')}}><Text>Call Now</Text></TouchableOpacity></View>

<View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>MEDICINE NEST</Text><Text> 290, Kariyanapalya, Lingarajapuram, Bengaluru, Karnataka 560084</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('098445 77333')}}><Text>Call Now</Text></TouchableOpacity></View>

     <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Well Health Plus Pharma</Text><Text>20/A, KATHA NO 33/3, K C, BK Halli Rd, Bommanahalli, Bengaluru, Karnataka 560068</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('093504 03403')}}><Text>Call Now</Text></TouchableOpacity></View>





      <TouchableOpacity style={{marginTop:40, marginLeft: 150, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

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

export default Pharmacies;