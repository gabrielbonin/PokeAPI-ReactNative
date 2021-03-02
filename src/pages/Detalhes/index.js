import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../service/api';

class Detalhes extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <View>
          <Text>Detalhes</Text>
      </View>
    );
  }
}
export default Detalhes;