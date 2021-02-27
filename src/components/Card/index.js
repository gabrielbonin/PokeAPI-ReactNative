import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class Card extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardHeader}>
        <Text style={styles.nomePk}></Text>
        </View>
      </View>
    );
  }
}
export default Card;

const styles = StyleSheet.create({
  container: {
   width: 330,
   height: 300,
   backgroundColor: '#fff',
   position: 'absolute',
   borderRadius: 10,
   opacity: 0.8
  },
  cardHeader:{
    flex: 1,
    backgroundColor: '#fff'
  },
  nomePk:{
    color: '#000',
    fontSize: 30
  }
});
