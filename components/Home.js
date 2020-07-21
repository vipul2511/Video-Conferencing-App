/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,BackHandler,ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {                    //Set your APPID here
      ChannelName: '',  
      password:''                               //Set a default channel or leave blank
    };
    this.handleBackButtonClick= this.handleBackButtonClick.bind(this);
  }
  /**
  * @name handleSubmit
  * @description Helper function to handle data on submit click
  */
  handleSubmit = async() => {
    let Password = this.state.password;
    let ChannelName = this.state.ChannelName;
    if (Password !== '' && ChannelName !== '') {
      // Actions.video({ Password, ChannelName });
      let nameObj ={
        channelName: ChannelName
        };
         await AsyncStorage.setItem('channelName',JSON.stringify(nameObj));
      this.props.navigation.navigate('MyTabs');
    }else{
      ToastAndroid.show("Please Enter correct Meeting ID and Password", ToastAndroid.SHORT)
    }
  }
  componentDidMount(){
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
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
        keyboardType="numeric"
                style={styles.formInput}
          onChangeText={(ChannelName) => this.setState({ ChannelName })}
          value={this.state.ChannelName}
        />
        <Text style={styles.formLabel}>Password</Text>
        <TextInput
        keyboardType="numeric"
          style={styles.formInput}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
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

export default Home;
