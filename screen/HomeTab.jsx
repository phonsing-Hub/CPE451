import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const screenOptions = () => ({
    abBarActiveTintColor: '#e7eaf6',
    tabBarInactiveTintColor: '#393e46',
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#fefefe',
    tabBarStyle: {
      position: 'absolute',
      padding: 15,
      bottom: 25,
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 80,
      backgroundColor: '#a2a8d3',
      ...styles.shadow,
    },
  });

  return (
    <Tab.Navigator initialRouteName="Tab2" screenOptions={screenOptions}>
      <Tab.Screen
        name="Tab1"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="customerservice" size={36} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Tab2"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon5 name="home" size={36} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Tab3"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon5 name="user" size={36} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
