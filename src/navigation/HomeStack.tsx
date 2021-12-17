import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createStackNavigator();

function MainNavigator() {
    return(
      <Stack.Navigator
        screenOptions={{
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              flex: 1,
            }
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
       
   
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

