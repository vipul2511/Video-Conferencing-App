import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Platform,TextInput, ToastAndroid,ScrollView,BackHandler} from 'react-native';
import requestCameraAndAudioPermission from './permission';
import AsyncStorage from '@react-native-community/async-storage';


let  width= Dimensions.get('window').width;
    let height= Dimensions.get('window').height;
class StartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {                    //Set your APPID here
          ChannelName: '',  
          password:'',
          Name:null,                            //Set a default channel or leave blank
        };
        if (Platform.OS === 'android') {                    //Request required permissions from Android
          requestCameraAndAudioPermission().then(_ => {
            console.log('requested!');
          });
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
   
      joinMeeting =async()=>{
        if(this.state.Name !=null){
        let nameObj ={
        name: this.state.Name
        };
         await AsyncStorage.setItem('username',JSON.stringify(nameObj));
         this.props.navigation.navigate('Home');
      }else{
        ToastAndroid.show("Please Enter your Name",ToastAndroid.SHORT);
      }
      }
      hostMeeting=async()=>{
        if(this.state.Name !=null){
          let nameObj ={
          name: this.state.Name+ '(HOST)'
          };
           await AsyncStorage.setItem('username',JSON.stringify(nameObj));
          this.props.navigation.navigate('Host');
        }else{
          ToastAndroid.show("Please Enter your Name",ToastAndroid.SHORT);
        }
        
      }
     

      render() {
        return (
          <ScrollView style={{backgroundColor:'#ffffff'}}>
            <View style={styles.container}>
              <Text style={styles.formLabel}>Name</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Enter your Name"
          onChangeText={(Name) => this.setState({ Name })}
          value={this.state.Email}
        />
                <View style={styles.buttonContainer}>
              
          <TouchableOpacity
            title="Host a Meeting"
            onPress={this.hostMeeting}
            style={styles.submitButton}
          >
            <Text style={{ color: '#ffffff',textAlign:'center',marginTop:8 }}>Host a Meeting </Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Host a Meeting"
            onPress={this.joinMeeting}
            style={styles.submitButton}
          >
            <Text style={{ color: '#ffffff',textAlign:'center',marginTop:8}}>Join a Meeting </Text>
          </TouchableOpacity>
        
        </View>
            </View>
            </ScrollView>
        );
      }    
}

const styles = StyleSheet.create({
    container: {
     justifyContent:'center',
      backgroundColor: '#ffffff', 
    },
    formLabel: {
      paddingBottom: 10,
      paddingTop: 10,
      color: '#0093E9',
      marginLeft:width*0.1,
      marginTop:height*0.2
     
    },
    formInput: {
      width:width*0.8,
      height: 40,
      backgroundColor: '#f5f5f5',
      color: '#0093E9',
      borderRadius: 4,
      paddingLeft: 20,
      marginLeft:width*0.1
    },
    buttonContainer: {
      paddingTop: 20,
      flexDirection:'row',
      alignItems:'center',
      marginTop:height*0.1
      
    },
    submitButton: {
      width:width*0.4,
      height:40,
      textAlign:'center',
      backgroundColor: '#0093E9',
      borderRadius: 25,
      marginLeft:width*0.06
      
    },
    
  });
  export default StartScreen;