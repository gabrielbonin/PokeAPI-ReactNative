import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal, Button} from 'react-native';
import Card from '../Card';

import api from '../../service/api';

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      buscarPokemon: '',
      pokemon : [],
      modalVisible: false
    }
    this.buscarPk = this.buscarPk.bind(this);
  }

 async buscarPk(){
    const buscarPokemon = this.state.buscarPokemon;
    this.setState({modalVisible: true})
    const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${buscarPokemon}/`)
    const data = {
      id: response.data.id,
      name: response.data.name,
      img: response.data.sprites.front_default,
      
      
    }
    this.setState({pokemon: data});
    
  
  }

  sair(visible){
    this.setState({modalVisible: visible})
  }

  render() {
    
    return (
      <View style={styles.container}>
          <View style={styles.containerBody}>
        <Image resizeMode="cover" style={styles.fundo} source={require('../../assets/fundo.jpg')}></Image>
        {/* <Card data={this.state.pokemon}></Card> */}
        <Modal transparent={true} animationType={'fade'} visible={this.state.modalVisible}>
           <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>{this.state.pokemon.name}</Text>
           <Text>{this.state.pokemon.id}</Text>
           <Image style={styles.pkImg} source={{uri: this.state.pokemon.img}}/>
           <Button title="Sair" onPress={()=> this.sair(false)}/>
           </View>
        </Modal>

          </View>
        <Text style={styles.text1}>Pokedex:</Text>
        <View style={styles.containerHeader}>
        <TextInput style={styles.inputPk}
        placeholder="Pesquise um Pokemon"
        onChangeText={(value)=> this.setState({buscarPokemon: value})}
        ></TextInput>
        <TouchableOpacity onPress={this.buscarPk} style={styles.btnPesq}>
          <Text style={styles.txtBtn}>+</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Body;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'red'
  },
  containerBody:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  containerHeader:{
    width: '100%',
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 80,
    justifyContent: 'space-between',
    paddingRight: 40,
    elevation: 2,
    backgroundColor: '#FFFF'
  
  },  
  text1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputPk:{
    borderColor: 'red',
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 7,
    padding: 5,
    textAlign: 'center',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000'
  },
  fundo:{
    width: 412,
    height: 450,
  },
  btnPesq:{
    width: 40,
    height:40,
    borderRadius: 5,
    backgroundColor: 'red',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtBtn:{
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5
  },
  //modal
  pkImg:{
    width: 350,
    height: 340,
  }
});
