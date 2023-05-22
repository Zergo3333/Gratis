import React from "react";
import {SafeAreaView, StyleSheet, Text, View, Dimensions, Pressable} from 'react-native'
import { Avatar, AirbnbRating } from "@rneui/themed";
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { state } from "../utilities/state";


let {height} = Dimensions.get('screen')

const Profile = () =>{
  const {container, profileImageStyle, nameAndSurname, myAds, iconStyle, wrapperBottom, bottomButtonColumn, bottomIconColumn}=styles
    return(
        <SafeAreaView style={container}>
          <View style={{alignItems:"center"}}>
              <Avatar size={100} source={{uri: state.user.avatar}} rounded icon={{ name: 'user', type: 'feather', color: 'rgb(150,150,150)' }} overlayContainerStyle={iconStyle} containerStyle={profileImageStyle} >
                <Avatar.Accessory size={35}/>
              </Avatar>
              <Text style={nameAndSurname}>User Name</Text>
              <AirbnbRating 
              isDisabled={false}
              defaultRating={0}
              size={20}
              reviewSize={0}
              selectedColor="#02A724"
              ratingContainerStyle={{bottom:20}}
              />
          </View>  
            <Pressable style={({pressed})=>[{
              backgroundColor: pressed? 'grey':'#f0f8ff'
              },wrapperBottom]}>
              <View style={bottomIconColumn}>
                <Feather name='upload' size={25} color={'rgb(150,150,150)'} />
              </View>
              <View style={bottomButtonColumn}>
                <Text style={myAds}>My active adds</Text>
              </View>
            </Pressable>
            <View style={wrapperBottom}>
              <View style={bottomIconColumn}>
                <Entypo name='location-pin' size={25} color={'rgb(150,150,150)'} />
              </View>
              <View style={bottomButtonColumn}>
                <Text style={myAds}>My adress</Text>
              </View>   
            </View>
            <View style={wrapperBottom}>
              <View style={bottomIconColumn}>
                <Entypo name='calendar' size={25} color={'rgb(150,150,150)'} />
              </View>
              <View style={bottomButtonColumn}>
                <Text style={myAds}>On Gratis since</Text>
              </View>   
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f8ff'
  },
  iconStyle:{
    borderWidth:1.5,
    borderColor:'black',
    borderRadius:100
  },
  profileImageStyle:{
    marginTop:height*0.17
  },
  nameAndSurname:{
    fontSize:30,
    color:'black',
    paddingTop:15,
    fontFamily:'Ubuntu-Medium'
  },
  myAds:{
    fontSize:18,
    color:'rgb(150,150,150)',
    fontFamily: 'Ubuntu-Medium'
  }, 
  wrapperBottom:{
    flexDirection:'row',
    top:height*0.03,
    justifyContent:'space-evenly',
    marginVertical:10
  },
  bottomIconColumn:{
    flexDirection:'column',
    flex:1,
    alignItems:'center'
  },
  bottomButtonColumn:{
    flexDirection:'column',
    flex:3,
    alignItems:'flex-start'
  }

})



export default Profile
