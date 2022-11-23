
import { View, Text, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, lightColors, Badge, Avatar } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";

export default function Wallet() {
  const navigation = useNavigation();
  return (
    <>
    <Text style={styles.heading}>Fields</Text>
    <TouchableOpacity style={styles.addFieldBtn} onPress={()=> navigation.navigate("Maps")}>
            <Text style={styles.addFieldBtnText}>Add new Field</Text>
          </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("BenefitInfoScreen")}>
        <Card containerStyle={[styles.card, styles.shadowProp]} >
          <Image source={require('../assets/farm-images/farm.jpg')} style={{ height: '100%', width: '100%', borderRadius: 10 }} />
          <View style={styles.cardTitlePosition}>
            <Text style={styles.cardInfo}>Field Name : Hector1</Text>
            <Text style={styles.cardInfo}>Member Id: 98615</Text>
          </View>
        </Card>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("BenefitInfoScreen")}>
        <Card containerStyle={[styles.card, styles.shadowProp]} >
          <Image source={require('../assets/farm-images/farm.jpg')} style={{ height: '100%', width: '100%', borderRadius: 10 }} />
          <View style={styles.cardTitlePosition}>
            <Text style={styles.cardInfo}>Field Name : Hector1</Text>
            <Text style={styles.cardInfo}>Member Id: 98615</Text>
          </View>
        </Card>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("BenefitInfoScreen")}>
        <Card containerStyle={[styles.card, styles.shadowProp]} >
          <Image source={require('../assets/farm-images/farm.jpg')} style={{ height: '100%', width: '100%', borderRadius: 10 }} />
          <View style={styles.cardTitlePosition}>
            <Text style={styles.cardInfo}>Field Name : Hector1</Text>
            <Text style={styles.cardInfo}>Member Id: 98615</Text>
          </View>
        </Card>
      </TouchableWithoutFeedback>

    </>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: '30%',
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  shadowProp: {
    shadowColor: "white"
  },
  cardTitlePosition: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    elevation: 20,
  },
  cardInfo: {
    color: 'white',
    fontWeight: '900'
  },
  heading:{
    fontSize:30,
    fontWeight:"700",
    color:"#474643",
    padding:10,
    paddingLeft:30,
    backgroundColor:"white"
  },
  addFieldBtnText:{
    color:"green",
    borderColor:"#474643",
    fontWeight:"bold"
  },
  addFieldBtn: {
    width: "80%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft:40,
    backgroundColor: "white",
    borderColor:"#474643"
  }
});