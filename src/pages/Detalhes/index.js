import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../service/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Detalhes({route}){
  const navigation = useNavigation();
  
    return(
      <View style={styles.container}>
        <Header/>
        <View style={styles.body}>
          <Text>ID:{route.params.pokemonID}</Text>
        </View>
        <Footer/>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  body:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  }
});