import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <View style={styles.container}>
          <Image  style={styles.imageContainer}
          imageStyle={styles.image} source={require('../assets/Images/newbenefitsLogo.png')} />
          <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="FirstName"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="LastName"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginicon} onPress={()=> navigation.navigate("NavigationTab")}>
                <Icon name='arrow-forward' />
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'white'
    },
    imageContainer:{
      margin: 30
    },
    inputView: {
      backgroundColor: "#6cab447a",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
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
   
    loginicon: {
      width: "20%",
      height:45,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#6cab44",
    },
  });