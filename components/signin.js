/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,BackHandler,ToastAndroid} from 'react-native';
import firebase from './firebase/firebase';



class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {                    //Set your APPID here
      Email: '',  
      password:''
                            //Set a default channel or leave blank
    };
  
  }

  createAccount=()=>{
      this.props.navigation.navigate('SignIn');
  }
  /**
  * @name handleSubmit
  * @description Helper function to handle data on submit click
  */
  handleSubmit = () => {
    let email = this.state.Email;
    let Password = this.state.password;
    if (Password !== '' && email !== '') {
     firebase.auth().signInWithEmailAndPassword(email,Password).then(()=>{
          this.props.navigation.navigate('Startscreen');
      }).catch(error => {
        ToastAndroid.show(error.message,ToastAndroid.SHORT);
      });
    }else{
      ToastAndroid.show("Please Enter correct Email ID and Password", ToastAndroid.SHORT)
    }
  }
  componentDidMount(){
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    // To popup the default screen 
     BackHandler.exitApp();   
    // Returning true/false is described below
      return true;
    }
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.formLabel}>Email ID</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={(Email) => this.setState({ Email })}
          value={this.state.Email}
        />
        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <View><TouchableOpacity title="Already have an Account" onPress={this.createAccount}>
            <Text style={{color:'#0093E9',textAlign:'right',marginTop:5}}> Don't have an Account ?</Text>
        </TouchableOpacity></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Start Call!"
            onPress={this.handleSubmit}
            style={styles.submitButton}
          >
            <Text style={{ color: '#ffffff' }}> Sign In </Text>
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

export default SignIn;
