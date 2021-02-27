import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Header from './src/components/Header';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.containerBody}>
        <Body/>
        </View>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBody:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
