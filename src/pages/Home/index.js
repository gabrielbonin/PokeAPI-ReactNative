import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


export default function Home() {
    return (
      <View style={styles.container}>
        <Header/>
        <Body/>
        <Footer/>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});