import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,BackHandler,ToastAndroid} from 'react-native';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import Video from './Video';
import Home from './Home';
import Host from './Host';
    const Scenes = Actions.create(
        <Scene key='root' tabs={true} >
          <Scene key='tab1' title='Add' component={Host}  />
          <Scene key='tab2' title='Grocery' component={Home} />
          <Scene key='tab3' title='To Do' component={Video} />
        </Scene>
      );
 export default Scenes;