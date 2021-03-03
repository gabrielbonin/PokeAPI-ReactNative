import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  function irHome(){
    navigation.navigate('Home');
  }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={irHome}>
        <Image style={styles.pokebolaImg}
        source={require('../../assets/pokebola3.png')} />
        </TouchableOpacity>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#cc0000',
    elevation: 5,
    shadowColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  pokebolaImg:{
    width: 130,
    height: 130,
    marginTop: -11,
  }
});
