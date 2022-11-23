import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
export default function HomeScreen(){
  const navigation = useNavigation();
    return (
      <View style={styles.container}>

          <Text style={styles.heading}>Language</Text>
          <TouchableOpacity style={styles.selectLanguage}>
            <Text style={styles.loginText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectLanguage}>
            <Text style={styles.loginText}>Hindi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectLanguage}>
            <Text style={styles.loginText}>German</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectLanguage}>
            <Text style={styles.loginText}>Spanish</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate("Login")}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    inputView: {
      backgroundColor: "#6cab447a",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
    image: {
      width:"100%",
      height:"100%",
      justifyContent: "center",
      opacity:0.9
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginText:{
      color:"white",
      fontWeight:"bold"
    },
    loginBtn: {
      width: "80%",
      borderRadius: 5,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 150,
      backgroundColor: "#025e25",
    },
    selectLanguage: {
      width: "80%",
      borderRadius: 5,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#025e25"
    },
    heading:{
      fontSize:30,
      fontWeight:"700",
      color:"#474643",
      marginBottom:100
    },
    secondaryHeading:{
      fontSize:20,
      fontWeight:"400"
    }
  });