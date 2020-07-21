// Loading.js
import React,{Component} from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from './firebase/firebase';
export default class Loading extends Component {
constructor(props){
  super(props);
}
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          if(user){
              this.props.navigation.navigate('Startscreen');
          }else{
              this.props.navigation.navigate('SignUp')
          }
        })
      }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})