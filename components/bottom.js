import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from './Video';
import Chat from './Chat';
const Tab = createBottomTabNavigator();
export default function MyTabs() {

    return (
      <Tab.Navigator tabBarOptions={{
           activeTintColor: '#0093E9',
          inactiveTintColor: '#848385',
          style:{ backgroundColor: 'white'}
          }}
          >
        <Tab.Screen name="Call" component={Video} options={{
            tabBarIcon:({color}) =>(
           <Icon name="video-call" color={color} size={25}></Icon>
            ),
            
            }} />
        <Tab.Screen name="Chat" component={Chat} options={{
            tabBarIcon:({color}) =>(
           <Icon name="chat-bubble" color={color} size={25}></Icon>
            ),
            
            }}  />
      </Tab.Navigator>
    );
  }