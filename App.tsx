import Geolocation from "@react-native-community/geolocation";
import React,{useEffect, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import GetLocation from "react-native-get-location";
import MapView from "react-native-maps";

const App = () =>{
  const {container} = styles
  const [latitude, setLatitude] = useState(0)
  const [longatude, setLongatude] = useState(0)
  useEffect (()=>{
    Geolocation.getCurrentPosition(position =>{
      setLatitude(position.coords.latitude)
      setLongatude(position.coords.longitude)
    })

    
  })
    
  return(
    <SafeAreaView style={container}>
      <MapView region={{latitude: latitude , longitude: longatude, latitudeDelta: 0.09, longitudeDelta: 0.4}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App