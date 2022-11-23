import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from './Notification';
import Wallet from './Wallet';
import Profile from './Profile';
import Dashboard from '../Dashboard';

export default function NavigationTab() {
const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      activeColor="#0f2d53"
      barStyle={{ backgroundColor: '#5fa440' }}
    >
      <Tab.Screen
        name="Fields"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
        headerTitle : "Notification",
          tabBarLabel: 'Notification',
          tabBarBadge: 1,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}>
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
                  {/* <Tab
            variant="primary"
            containerStyle={styles.tab}
            >
            <Tab.Item
                titleStyle={{ fontSize: 10 }}
                icon={{ name: 'albums-outline', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
                titleStyle={{ fontSize: 12 }}
                icon={{ name: 'notifications-outline', type: 'ionicon', color: 'white' }}
                onPress={()=> navigation.navigate("Notification")}
            >
            <Tab.Item
                titleStyle={{ fontSize: 12 }}
                icon={{ name: 'wallet-outline', type: 'ionicon', color: 'white' }}
                onPress={()=> navigation.navigate("Wallet")}
            />
            <Tab.Item onPress={()=> navigation.navigate("More")}>
              <Avatar size={35} rounded title="AR" containerStyle={{  borderWidth: 1,borderColor: "white", borderRadius: 50 }} /> 
          </Tab.Item>
            </Tab> */}
    </Tab.Navigator>
  );
}