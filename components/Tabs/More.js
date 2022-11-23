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



export default function More() {
   
    return(
        <View style={styles.container}>
           <Text>More Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },


  });