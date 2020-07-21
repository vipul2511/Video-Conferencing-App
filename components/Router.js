/* eslint-disable prettier/prettier */
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Video from './Video';
import Home from './Home';
import StartScreen from './StartScreen';
import Host from './Host';
import SignUp from './signup';
import SignIn from './signin';
import Loading from './loading';
import Chat from './Chat';
import MyTabs from './bottom';

const Stack = createStackNavigator();
function RouterComponent(){
	return(
	<NavigationContainer>
      <Stack.Navigator initialRouteName="loading" >
	  <Stack.Screen name="loading" component={Loading} options={{headerShown:false}} />
        <Stack.Screen name="Home"  component={Home}  />
        <Stack.Screen name="Video" component={Video} options={{headerShown:false}} />
        <Stack.Screen name="Startscreen" component={StartScreen} />
		<Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}} />
		<Stack.Screen name="Host" component={Host} />
		<Stack.Screen name="SignUp" component={SignUp} />
		<Stack.Screen name="SignIn" component={SignIn} />
		<Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
	);
	};

export default RouterComponent;
