import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}
export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    backgroundColor: '#cc0000',
    elevation: 5,
    shadowColor: '#000',
    borderTopWidth: 1,
    alignItems: 'center',
    position: 'absolute',
    left: 0, 
    right: 0,
    bottom: 0
  }
});
