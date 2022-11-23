import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import Notification from "./components/Tabs/Notification";
import Wallet from "./components/Tabs/Wallet";
import NavigationTab from "./components/Tabs/NavigationTab";
import BenefitInfoScreen from "./components/BenefitInfoScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import NearbyProvider from "./components/NearbyProvider";
import { Icon } from "@rneui/themed";
import Profile from "./components/Tabs/Profile";
import { enableLatestRenderer } from 'react-native-maps'
import Maps from "./Maps";

const Stack = createNativeStackNavigator();
export default function App() {
  function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

    switch (routeName) {
      case 'Dashboard':
        return 'Carbon4all';
      case 'Notification':
        return 'Notification';
      case 'Wallet':
        return 'Wallet';
      case 'Profile':
        return 'Profile';
      default:
        return 'Carbon4all'
    }
  }
  const logout = () => {
    //  navigation.navigate("Home")
    alert("Logged out..")
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Carbon4all' }} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="NavigationTab" component={NavigationTab} options={({ route }) => ({
            headerTitle: getHeaderTitle(route), headerBackVisible: false, headerLeft: () => (
              <Icon name='menu' 
                title="menu"
                style={{color:"white"}}
              />
            ),
            headerRight: () => (
              <Icon name='logout' onPress={logout}
                title="menu"
                style={{color:'white'}}
              />
            ),
          })} />
          <Stack.Screen name="BenefitInfoScreen" component={BenefitInfoScreen} options={{ title: 'Adding New Field' }}  />
          <Stack.Screen name="NearbyProvider" component={NearbyProvider} options={{ title: 'Nearby Providers' }} />

          {/* TABS Navigation */}
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Maps" component={Maps} options={{ title: 'Select Area' }} />
        </Stack.Navigator>

      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
enableLatestRenderer();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
