// @flow
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import Backend from '../Backend';
import { BackHandler, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const IDs='123456'
export default class Chat extends React.Component {
  constructor(props){
    super(props);
   this.state = {
      messages: [],
      name:null,
    chatID:'124568'
       };
       this.handleBackButtonClicks= this.handleBackButtonClicks.bind(this);
  }
 


  
  render() {
    // const { navigation } = this.props;
    // const name = navigation.getParam('name');
    // console.log(name);
   
 
    return (
      <GiftedChat
        messages={this.state.messages}
        renderUsernameOnMessage={true}
        onSend={(message,IDs) => {
          Backend.sendMessage(message,IDs);
        }}
        user={{
          _id: Backend.getUid(),
          name:this.state.name,
        }}
      />
      
    );
  }
  
  componentDidMount=async()=> {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClicks);
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
   const data= await AsyncStorage.getItem('username');
   const finalData= JSON.parse(data);
   console.log(finalData.name);
   this.setState({name:finalData.name});
  }
  handleBackButtonClicks() {
    // To popup the default screen 
  ToastAndroid.show("Please End the Video Call rttgg",ToastAndroid.SHORT);
 
    // Returning true/false is described below
      return true;
    } 
  componentWillUnmount() {
    Backend.closeChat();
 
  }
  
}




// Chat.propTypes = {
//   name: React.propTypes.string,
// };
