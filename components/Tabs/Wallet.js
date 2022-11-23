// import { View, Text, StyleSheet, LogBox } from 'react-native'
// import React, {useEffect} from 'react'
// import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
// import styles from 'react-native-swipeable-parallax-carousel/styles';
// export default function Wallet() {
//   const datacarousel = [
//     { "id": 339964, "title": "ACN Membership card", "subtitle": "Random Subtitle", "imagePath": "https://www.newbenefits.com/wp-content/uploads/2021/01/NB-Photo-Technology-Dynamic-Dashboard-510x700-1.jpg", }, 
//     { "id": 315635, "title": "New Benefits", "subtitle": "Creating Advantage","imagePath": "https://www.newbenefits.com/wp-content/themes/socialdoctor/images/home/home-print.webp", }, 
//     { "id": 339403, "title": "New Benefits", "subtitle": "Creating Advantage", "imagePath": "https://www.newbenefits.com/wp-content/themes/socialdoctor/images/home/cta-1.webp" },
//   ];
//   useEffect(() => {
//     LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
// }, [])
//   return (
//     <View style={styless.card}>
//       <SwipeableParallaxCarousel data={datacarousel} 
//       titleColor= {styless.car}
//       navigation = "true" 
//       navigationType = "dots"
//       parallax = "true"
//       navigationColor = "blue"
//        />
//       <Text>Wallet</Text>
//     </View>
//   )
// }

// const styless = StyleSheet.create({
//   card:{
//     flex:1,
//     width:"100%",
//     height:"100%"
//   },
//   car:{
//     color: 'red',
//     fontSize: 40,
//   }
// })


// ---------------PARALLAX Class Component ---------------------
// import React, {Component, useEffect} from 'react';
// import {Animated, Dimensions, ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View, LogBox} from 'react-native';
// import ParallaxSwipeView from 'react-native-parallax-swipe';

// const {width} = Dimensions.get('window');

// class Wallet extends Component {
//     componentDidMount() {
//         LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
//     }
//     renderDots({current}) {
//         let dots = [];

//         for (let i = 0; i < 3; i += 1) {
//             let dotStyles = [styles.paginationDot];

//             if (current === -i) {
//                 dotStyles.push(styles.paginationDotActive)
//             }

//             dots.push(<View key={'dot_' + i} style={dotStyles} />)
//         }

//         return <View style={styles.paginationDots}>
//             {dots}
//         </View>
//     }

//     renderBottom({current, translateX, move}) {
//         const backgroundColor = translateX.interpolate({
//             inputRange: [-2, -1, 0],
//             outputRange: ['rgba(28,125,208,1)', 'rgba(28,125,208,1)', 'rgba(28,125,208,1)'],
//         });

//         return <Animated.View style={[styles.paginationContainer, {backgroundColor}]}>
//             {this.renderDots({current})}

//             {current === 0 && 
//             <Text style={styles.title}>
//                 Benefit Name : ACN Perk
//             </Text>}

//             {current === -1 && 
//             <Text style={styles.title}>
//                 Benefit Name : Benefit B
//             </Text>}

//             {current === -2 && 
//                 <Text style={styles.title}>
//                 Benefit Name : Benefit C
//             </Text>}

//         </Animated.View>
//     }

//     renderFirst({translateX}) {
//         return <View
//             style={{
//                 width,
//                 height: '60%',
//             }}
//         >
//             <View style={{flex: 1 , margin:20, elevation: 40}}>
//                 <ImageBackground
//                     style={{
//                     height: '100%'}}
//                     blurRadius={5}
//                     source={{
//                     uri: 'https://www.newbenefits.com/wp-content/themes/socialdoctor/images/home/cta-1.webp',
//                     }}>
//                     <View style={{position: 'absolute',
//                         top: 20,
//                         left: 100,
//                         right: 0,
//                         bottom: 0}}>
//                     <Text style={{ fontSize: 22,
//                     color: 'black',
//                     fontWeight: '500'}}>New Benefits</Text>
//                     </View>

//                     <View style={{position: 'absolute',
//                         top: 270,
//                         left: 10,
//                         right: 0,
//                         bottom: 0}}>
//                     <Text style={{ fontSize: 16,
//                     color: 'black',
//                     fontWeight: '500'}}>Member Name: Aman</Text>
//                     </View>

//                     <View style={{position: 'absolute',
//                         top: 290,
//                         left: 10,
//                         right: 0,
//                         bottom: 0}}>
//                     <Text style={{ fontSize: 16,
//                     color: 'black',
//                     fontWeight: '500'}}>Member Id: 13251561</Text>
//                     </View>

//                     <View style={{position: 'absolute',
//                         top: 310,
//                         left: 10,
//                         right: 0,
//                         bottom: 0}}>
//                     <Text style={{ fontSize: 16,
//                     color: 'black',
//                     fontWeight: '500'}}>Group Id: XYZ-99</Text>
//                     </View>


//                 </ImageBackground>
//             </View>
            
//         </View>
//     }

//     renderSecond({translateX, relativeX}) {
//         return <View
//         style={{
//             width,
//             height: '60%',
//         }}
//     >
//         <View style={{flex: 1 , margin:20, elevation: 40}}>
//             <ImageBackground
//                 style={{
//                 height: '100%'}}
//                 blurRadius={5}
//                 source={{
//                 uri: 'https://www.newbenefits.com/wp-content/themes/socialdoctor/images/home/home-print.webp',
//                 }}>
//                 <View style={{position: 'absolute',
//                     top: 20,
//                     left: 100,
//                     right: 0,
//                     bottom: 0}}>
//                 <Text style={{ fontSize: 22,
//                 color: 'black',
//                 fontWeight: '500'}}>New Benefits</Text>
//                 </View>

//                 <View style={{position: 'absolute',
//                     top: 270,
//                     left: 10,
//                     right: 0,
//                     bottom: 0}}>
//                 <Text style={{ fontSize: 16,
//                 color: 'black',
//                 fontWeight: '500'}}>Member Name: Aman</Text>
//                 </View>

//                 <View style={{position: 'absolute',
//                     top: 290,
//                     left: 10,
//                     right: 0,
//                     bottom: 0}}>
//                 <Text style={{ fontSize: 16,
//                 color: 'black',
//                 fontWeight: '500'}}>Member Id: 13251561</Text>
//                 </View>

//                 <View style={{position: 'absolute',
//                     top: 310,
//                     left: 10,
//                     right: 0,
//                     bottom: 0}}>
//                 <Text style={{ fontSize: 16,
//                 color: 'black',
//                 fontWeight: '500'}}>Group Id: XYZ-99</Text>
//                 </View>


//             </ImageBackground>
//         </View>
        
//     </View>
//     }

//     renderThird({translateX}) {
//         return <View
//         style={{
//             width,
//             height: '60%',
//         }}
//     >
//         <View style={{flex: 1 , margin:20, elevation: 40}}>
//             <ImageBackground
//                 style={{
//                 height: '100%'}}
//                 blurRadius={5}
//                 source={{
//                 uri: 'https://ce-nb-images-dev.azureedge.net/new-benefits/images/package-a/pkgA-2.jpg',
//                 }}>
//                 <View style={{position: 'absolute',
//                     top: 20,
//                     left: 100,
//                     right: 0,
//                     bottom: 0}}>
//                 <Text style={{ fontSize: 22,
//                 color: 'black',
//                 fontWeight: '500'}}>New Benefits</Text>
//                 </View>

//                 <View style={{position: 'absolute',
//                     top: 270,
//                     left: 10,
//                     right: 0,
//                     bottom: 0}}>
//                 <Text style={{ fontSize: 16,
//                 color: 'black',
//                 fontWeight: '500'}}>Member Name: Aman</Text>
//                 </View>

//                 <View style={{position: 'absolute',
//                     top: 290,
//                     left: 10,
//                     right: 0,
//                     bottom: 0}}>
//                 <Text style={{ fontSize: 16,
//                 color: 'black',
//                 fontWeight: '500'}}>Member Id: 13251561</Text>
//                 </View>

//                 <View style={{position: 'absolute',
//                     top: 310,
//                     left: 10,
//                     right: 0,
//                     bottom: 0}}>
//                 <Text style={{ fontSize: 16,
//                 color: 'black',
//                 fontWeight: '500'}}>Group Id: XYZ-99</Text>
//                 </View>


//             </ImageBackground>
//         </View>
        
//     </View>
//     }

//     render() {
//         return <ParallaxSwipeView
//             screens={[
//                 this.renderFirst.bind(this),
//                 this.renderSecond.bind(this),
//                 this.renderThird.bind(this),
//             ]}
//             bottomView={this.renderBottom.bind(this)}
//         />;
//     }
// }

// const styles = StyleSheet.create({
//     paginationDot: {
//         backgroundColor: 'rgba(255, 255, 255, .2)',
//         width: 6,
//         height: 6,
//         borderRadius: 3,
//         marginHorizontal: 4.5
//     },
//     paginationDotActive: {
//         backgroundColor: '#FFF',
//     },
//     paginationDots: {
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingVertical: 10,
//     },
//     paginationContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         width,
//         paddingHorizontal: 16,
//         paddingBottom: 34,
//         paddingTop: 8,
//         alignItems: 'stretch',
//     },
//     title: {
//         color: '#FFF',
//         fontFamily: "monospace",
//         fontSize: 24,
//         lineHeight: 29,
//         textTransform: "uppercase",
//         fontWeight: "bold",
//         textAlign: "center",
//     },
//     titleHighlight: {
//         color: '#000000',
//     },
//     bottomButton: {
//         marginTop: 24,
//         marginLeft: 72,
//         marginRight: 72,
//         height: 48,
//         borderRadius: 0,
//         backgroundColor: '#3937D0',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderWidth: 0,
//     },
//     bgImage: {
//         flexGrow: 1,
//         resizeMode: 'cover',
//     },
// });

// export default Wallet



import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Card, lightColors, Badge, Avatar } from '@rneui/themed';

export default function Wallet() {
  return (
    <>
                <ImageBackground
                  style={{ borderRadius:25, width:'100%',height:'100%' }}
                  blurRadius={15}
                  source={
                    {uri:'https://www.newbenefits.com/wp-content/themes/socialdoctor/images/home/home-print.webp'}
                  }
                >
                    <Card containerStyle = {[styles.card, styles.shadowProp]} >
                        <Image blurRadius={8} source={require('../../assets/farm-images/farm.jpg')} style={{height:'100%', width:'100%', borderRadius:25}} />
                        <View style={styles.cardTitlePosition}> 
                            <Text style={styles.cardTitle}>Benefit A</Text>
                            <Text style={styles.cardInfo}>Member Id: 98615</Text>
                            <Text style={styles.cardInfo}>Group Id: ABC-12a</Text>
                            <Text style={styles.cardInfo}>This is not insurance</Text>
                        </View>
                    </Card>
                    <Card containerStyle = {[styles.card, styles.shadowProp]} >
                        <Image blurRadius={8} source={{uri:'https://sanbstorageuat.blob.core.windows.net/catalog/e88b0/KOY-64198055/Package%20D_696x480.jpg'}} style={{height:'100%', width:'100%', borderRadius:25}} />
                        <View style={styles.cardTitlePosition}> 
                            <Text style={styles.cardTitle}>Benefit B</Text>
                            <Text style={styles.cardInfo}>Member Id: 69893</Text>
                            <Text style={styles.cardInfo}>Group Id: XZY-56z</Text>
                            <Text style={styles.cardInfo}>This is not insurance</Text>
                        </View>
                    </Card>
                    <Card containerStyle = {[styles.card, styles.shadowProp]} >
                        <Image blurRadius={8} source={{uri:'https://ce-nb-images-prod.azureedge.net/catalog/f583c/BIE-79115689/4-min%20(1).webp'}} style={{height:'100%', width:'100%', borderRadius:25}} />
                        <View style={styles.cardTitlePosition}> 
                            <Text style={styles.cardTitle}>Benefit C</Text>
                            <Text style={styles.cardInfo}>Member Id: 15678</Text>
                            <Text style={styles.cardInfo}>Group Id: KJL-45k</Text>
                            <Text style={styles.cardInfo}>This is not insurance</Text>
                        </View>
                    </Card>
                </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius:25,
        height:'30%',
        backgroundColor:'transparent',
        borderWidth: 0
    },
    shadowProp : {
        shadowColor:"black"
      },
      cardTitlePosition:{
        position: 'absolute',
        bottom: 20,
        left: 20,
        elevation:20,
    },
    cardTitle:{
        color:'white',
        fontSize:24,
        fontWeight:'500'
    },
    cardInfo:{
        color:'#0f2d53',
        fontWeight:'900'
    }

});