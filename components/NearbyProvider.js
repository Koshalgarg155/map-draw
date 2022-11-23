import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MapView , { Marker } from 'react-native-maps';
import { ListItem, Icon, Avatar  } from '@rneui/themed';
import Maps from '../Maps';

export default function NearbyProvider() {
  return (
    <View style={styles.container}>
      <Maps/>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    map: {
      width: "100%",
      height: '50%',
    },
    nearbyText :{
        fontSize: 18,
        fontWeight: "500",
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    list:{
        marginBottom: 20
    }
    
  });