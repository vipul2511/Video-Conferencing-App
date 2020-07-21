/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,BackHandler} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class Host extends Component {

  constructor(props) {
    super(props);
    this.state = {                    //Set your APPID here
        channelName: null,  
      password:null,
      checkChannel:[]                             //Set a default channel or leave blank
    };
    this.handleBackButtonClick= this.handleBackButtonClick.bind(this);
  }

  /**
  * @name handleSubmit
  * @description Helper function to handle data on submit click
  */
  handleSubmit = async() => {
    const ChannelName= this.state.channelName;
    const Password = this.state.password;
    let nameObj ={
      channelName: ChannelName
      };
       await AsyncStorage.setItem('channelName',JSON.stringify(nameObj));
    this.props.navigation.navigate('MyTabs');
  }
  UNSAFE_componentWillMount=async() =>{
    const minm = 100000000;
        const maxm = 999999999;
        let downInnerHTML = Math.floor(Math
            .random() * (maxm - minm + 1)) + minm;
        console.log(downInnerHTML);
          console.log(this.state.checkChannel);
          await AsyncStorage.setItem('chatNumber',JSON.stringify(downInnerHTML));
        this.setState({channelName:downInnerHTML.toString()});
      // Generate the password
        let downInnerHTMLs = Math.floor(1000+Math.random()*9000);
        console.log(downInnerHTMLs);
        this.setState({password:downInnerHTMLs.toString()});
  }
  componentDidMount(){
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  console.log(this.state.channelName);
  console.log(this.state.password);
  }
 
  handleBackButtonClick() {
    // To popup the default screen 
  this.props.navigation.navigate('Startscreen');  
    // Returning true/false is described below
      return true;
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formLabel}>Meeting ID</Text>
        <TextInput
          style={styles.formInput}
        //   onChangeText={(MeetingID) => this.setState({MeetingID })}
          value={this.state.channelName}
          editable={false}
        />
        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          style={styles.formInput}
          
          value={this.state.password}
          editable={false}
        />
         <View><Text style={{ color:'gray',marginTop:8}}>* Use/Share this Meeting ID and Password to Start/join the Meeting </Text></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Start Call!"
            onPress={this.handleSubmit}
            style={styles.submitButton}
          >
            <Text style={{ color: '#ffffff' }}> Start Meeting </Text>
          </TouchableOpacity>
       
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  formLabel: {
    paddingBottom: 10,
    paddingTop: 10,
    color: '#0093E9',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  submitButton: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: 25,
  },
  formInput: {
    height: 40,
    backgroundColor: '#f5f5f5',
    color: '#0093E9',
    borderRadius: 4,
    paddingLeft: 20,
  },
});

export default Host;
