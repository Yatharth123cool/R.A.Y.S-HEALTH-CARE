import * as React from "react";
import Constants from 'expo-constants';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import Home from "./components/Home"
import Spa from "./components/Spa"
import FitnessStudios from "./components/FitnessStudios"
import Therapists from "./components/Therapists"
import Counsellors from "./components/Counsellors"
import Ayurveda from "./components/Ayurveda"
import Pharmacies from "./components/Pharmacies"
import Dietician from "./components/Dietician"
import Startscreen from "./components/Startscreen"
import About from "./components/About"
import Contact from "./components/Contact"
import FAQ from "./components/FAQ"
import Refferals from "./components/Refferals"







export default class App extends React.Component {

  render() {
    return (
     <View>

      <AppContainer/>
     </View>  
      
    );
  }
}

var AppNavigator= createSwitchNavigator({
  
appNav1:Startscreen,  
appNav2: Home,
appNav3: Spa, 
appNav4: FitnessStudios,
appNav5: Therapists,
appNav6: Ayurveda,
appNav7: Counsellors,
appNav8:Dietician,
appNav9: Pharmacies,
appNav10: About,
appNav11: Contact,
appNav12: FAQ,
appNav13: Refferals




  
})
 var AppContainer = createAppContainer(AppNavigator)
