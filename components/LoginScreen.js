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
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <Text style={styles.inputLabel}>Famer Id</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text style={styles.inputLabel}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View><Text style={styles.dataLabel}>Must have al least 8 characters including
        numbers and symbols</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("NavigationTab")}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.agreementLabel}>By signing in , you agree to our Terms & 
Conditions and Privacy Policy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },
  imageContainer: {
    margin: 30
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderColor: "black",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#025e25",
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#474643",
    marginBottom: 100
  },
  dataLabel:{
    width: "80%",
    borderColor: "black",
    marginBottom:100
  },
  inputLabel: {
    width: "80%",
    borderColor: "black"
  },
  inputBox: {
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 150,
    paddingRight: 200,
    borderColor: "black",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  agreementLabel:{
    width: "80%",
    borderColor: "black",
    marginTop:100
  }
});