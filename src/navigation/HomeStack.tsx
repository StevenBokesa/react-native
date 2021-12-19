import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/Login/LoginScreen';
import AddChatScreen from '../screens/AddChat/AddChatScreen';



const Stack = createStackNavigator();

function MainNavigator() {
    return(
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22
        }
      }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AddChat' component={AddChatScreen} />
   
       
   
      </Stack.Navigator>
    )
  }


const Drawer = createDrawerNavigator(); 

function DrawerStack() {
  return(
    <Drawer.Navigator
      
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}:{navigation:any})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 
export default function HomeStack() {
    return (
      
        <DrawerStack/>
    
    );
  }

