
import React from "react";
import { TouchableOpacity } from "react-native";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "react-native-vector-icons/FontAwesome5";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import OutputScreen from "./screens/OutputScreen";
import Login from "./screens/Login";
import RizzSplash from "./screens/RizzSplash";
import RizzBot from "./screens/RizzBot";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Default = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#6c757d",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopColor: 'transparent',
            height: 70,
            position: 'absolute',
            zIndex: 1,
            elevation: 0,
          },
          tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ focused, color,size }) => {
            let iconName;
    
            if (route.name === "Home") {
              iconName = focused ? "home" : "home"
            } else if (route.name === "Profile") {
              iconName = focused ? "user" : "user";
            } else if  (route.name === "RizzBot") {
              iconName = focused ? "ghost" : "ghost";
            }

            if (focused) {
              size = 30;
            } else {
              size = 24;
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="RizzBot" component={RizzBot} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

const SignedIn = () => {
    return (
        <NavigationContainer
        theme={DarkTheme}
        >
            <Stack.Navigator screenOptions= {{headerShown: false}}>
               <Stack.Screen name="Default" component={Default} />
               <Stack.Screen name="Output" component={ OutputScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default SignedIn;
