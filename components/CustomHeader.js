import React from "react";
import { Text, TouchableOpacity,View,Image,StyleSheet,Dimensions,Platform } from "react-native";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";


const CustomHeader = props =>{

    const {navigation,title,show,save,saveFilter,favorite,isFavorited} = props;
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
          <Image source={require('../assets/back.png')} resizeMode={'contain'} style={styles.avatar}/>
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
        {show ? <TouchableOpacity onPress={favorite}><Ionicons name={isFavorited ? "md-star-outline" : "md-star"} size={24} color={Platform.OS === 'ios' ? Colors.primaryColor : 'white'} /></TouchableOpacity> : null }
        {save ? <TouchableOpacity onPress={saveFilter} ><Ionicons name="md-save" size={24} color={Platform.OS === 'ios' ? Colors.primaryColor : 'white'} /></TouchableOpacity> : null }
        
      </View>
    )
}

const styles= StyleSheet.create({

  container : {

    flexDirection :'row',
    justifyContent : 'center',
    alignItems :'center',
    backgroundColor : Platform.OS==='ios' ? 'white' : Colors.primaryColor,
    height : Dimensions.get('screen').height * 0.095,
    paddingTop : 15,
    paddingHorizontal : 10

  },
  button : {

    flex :1

  },
  avatar : {

    width :20,
    height :20

  },
  text : {

    flex : 1.5,
    color : Platform.OS === 'ios' ? Colors.primaryColor : 'white' ,
    fontSize : 17

  }


})

export default CustomHeader;