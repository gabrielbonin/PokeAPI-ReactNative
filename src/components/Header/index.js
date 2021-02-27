import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <Image style={styles.pokebolaImg}
        source={require('../../assets/pokebola3.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Header;

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
