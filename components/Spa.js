import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView, font} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";



class Spa extends React.Component {    

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
       
      <View style= {{marginTop:100 , marginLeft: 10}}>
     <Text>The Soul And Skin Spa And Saloon</Text><Text>502, Concourse House, Greenlands Rd, Divyashakti Appartments, Ameerpet, Hyderabad, Telangana 500016
     </Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 100}} onPress={()=>{this.triggerCalling('7995292348')}}><Text>Call Now</Text></TouchableOpacity>
 </View>

   <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>sohum spa and wellness sanctuary</Text><Text>B-10, Vaikunthlal Mehta Rd, Kapole Society, Vithal Nagar, Juhu, Mumbai, Maharashtra 400049</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('099673 94211')}}><Text>Call Now</Text></TouchableOpacity></View>


      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>The barbio Spa & Salon</Text><Text>The barbio Spa & Salon, niwec club, Pipeline Rd, near reliance petrol pump, Nashik, Maharashtra 422007</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45,
 alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('88988 99088')}}><Text>Call Now</Text></TouchableOpacity></View>

      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>MUKTAA THE WELLNESS CLINIC & LUXURY SPA</Text><Text>1st Floor, NKM International House, next left from marine plaza hotel behind LIC Building Babubhai chinai road, Marine Dr, e, Mumbai, Maharashtra 400020</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('022 6634 6663')}}><Text>Call Now</Text></TouchableOpacity></View>

      <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Sunrise Spa Massage Centre In Deccan Pune</Text><Text>Opp Sambhaji Garden Deccan, Shivajinagar, Pune, Maharashtra 411005</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('074482 53737')}}><Text>Call Now</Text></TouchableOpacity></View>

<View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Da Velvet Spa</Text><Text>M.No- 8 - 2 - 684/A, 2nd floor, Above Daman Organic Store, Kimiti Colony Gate 2, Rd Number 12, near Fortune Hotel, Banjara Hills, Hyderabad, Telangana 500034</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('95427 27964')}}><Text>Call Now</Text></TouchableOpacity></View>

<View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Meghavi Wellness Spa | The Woodrose</Text><Text>May Flower Block, The Woodrose, 3rd floor, Campus, Jagruthi Colony, Ramaiah Garden, JP Nagar 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('095148 79999')}}><Text>Call Now</Text></TouchableOpacity></View>

 <View style= {{marginTop: 40, marginLeft: 10}}>
     <Text>Annes Body Spa</Text><Text>Phoenix Mall, East Court Phoenix Market City, UG-10, Viman Nagar, Pune, Maharashtra 411014</Text><TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}} onPress={()=>{this.triggerCalling('091507 00909')}}><Text>Call Now</Text></TouchableOpacity></View>

      <TouchableOpacity style= {{backgroundColor: "#fed8b1", width: 200, height: 60, marginTop: 10, marginLeft: 45, alignItems: "center", justifyContent: "center", borderRadius: 200}}  onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#fed8b1",
  width: 220,
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

  
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },


textInputStyle:{
marginTop: 10, marginLeft: 10, width: "80%", height: 40, alignSelf: "center", textAlign: "center", borderWidth: 1
},



})

export default Spa;