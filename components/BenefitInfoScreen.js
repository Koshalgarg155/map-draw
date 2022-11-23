import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon, Card } from '@rneui/themed';

export default function BenefitInfoScreen() {
    const navigation = useNavigation();
    return (
        <>
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
    productInfo: {
        marginHorizontal: 15
    },
    image: {
        width: "100%",
        height: "30%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    productDescription: {
        marginTop: 15,
        fontSize: 16,
        lineHeight: 25,
    },
    featureContainer: {
        flexDirection: 'row', flexWrap: 'wrap',
    },
    featureTab: {
        width: 140,
        backgroundColor: 'lightgray',
        borderRadius: 15,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 20,
        padding: 15
    },
    featureTabTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    featureTabDescription: {
        margin: 5
    }
}
);