import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal, Button} from 'react-native';

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
    const buscarPokemon = this.state.buscarPokemon.toLowerCase();
    this.setState({modalVisible: true})
    const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${buscarPokemon}/`)
    const data = {
      id: response.data.id,
      name: response.data.name,
      img: response.data.sprites.front_default,
      type: response.data.types[0].type.name
      
    }
    this.setState({pokemon: data});
    
    alert('type: ' + this.state.pokemon.type)
  
  }

  sair(visible){
    this.setState({modalVisible: visible})
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>Body1</Text>
          <View style={styles.containerHeader}>
          <Image resizeMode="stretch" style={styles.fundo} source={require('../../assets/fundo.jpg')}></Image>
          <Modal transparent={false} animationType={'slide'} visible={this.state.modalVisible}>
                 <View style={{width: 410, height: 440, marginTop: 70, alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{width: 80, height: 30, padding: 3, marginTop: 50, alignItems: 'center', justifyContent: 'flex-start'}}>
                     <Button title="Voltar" onPress={()=> this.sair(false)}/>
                   </View>
                <TouchableOpacity>
                  <Image style={styles.pkImg} source={{uri: this.state.pokemon.img}}/>
                 </TouchableOpacity>
                
                 </View>
         </Modal>
          </View>
          <View style={styles.containerBody}>
            <View style={styles.containerFooter1}>
            <View style={styles.modalFooter}> 
                   <View style={styles.boxAtt}>
                   <Text style={styles.txtModal}>Nome: {this.state.pokemon.name}</Text>
                   </View>
                   <View style={styles.boxAtt}>
                   <Text style={styles.txtModal}>Id: {this.state.pokemon.id}</Text>
                   </View>
                   <View style={styles.boxAtt}>
                   <Text style={styles.txtModal}>Tipo: {this.state.pokemon.type}</Text> 
                   </View>
                   <View style={styles.boxAtt}>
                   <Text style={styles.txtModal}>Peso: {this.state.pokemon.weight}</Text> 
                   </View>
                 </View>
            </View>
            <View style={styles.containerFooter2}>
            <TextInput style={styles.inputPk} placeholder="Pesquise um Pokemon" onChangeText={(value)=> this.setState({buscarPokemon: value})}></TextInput>
               <TouchableOpacity onPress={this.buscarPk} style={styles.btnPesq}>
                 <Text style={styles.txtBtn}>+</Text>
               </TouchableOpacity>
            </View>
          </View>
      </View>
      );
    }
  }
    //   <View style={styles.container}>
    //     <View style={styles.containerBody}>
    //         <Image resizeMode="stretch" style={styles.fundo} source={require('../../assets/fundo.jpg')}></Image>
    //         <View style={styles.containerHeader}>
    //           <TextInput style={styles.inputPk}
    //             placeholder="Pesquise um Pokemon"
    //             onChangeText={(value)=> this.setState({buscarPokemon: value})}></TextInput>
    //           <TouchableOpacity onPress={this.buscarPk} style={styles.btnPesq}>
    //             <Text style={styles.txtBtn}>+</Text>
    //           </TouchableOpacity>
    //         </View>
    //           <Modal transparent={true} animationType={'slide'} visible={this.state.modalVisible}>
    //             <View style={{width: 410, height: 440, marginTop: 70, alignItems: 'center', justifyContent: 'center'}}>
    //               <View style={{width: 60, height: 30, padding: 3, marginTop: 50, alignItems: 'center', justifyContent: 'flex-start'}}>
    //                 <Button title="Sair" onPress={()=> this.sair(false)}/>
    //               </View>
    //             <TouchableOpacity>
    //               <Image style={styles.pkImg} source={{uri: this.state.pokemon.img}}/>
    //             </TouchableOpacity>
    //             <View style={styles.modalFooter}>
    //               <View style={styles.boxAtt}>
    //               <Text style={styles.txtModal}>{this.state.pokemon.name}</Text>
    //               </View>
    //               <View style={styles.boxAtt}>
    //               <Text style={styles.txtModal}>{this.state.pokemon.id}</Text>
    //               </View>
    //               <View style={styles.boxAtt}>
    //               <Text style={styles.txtModal}>{this.state.pokemon.type}</Text> 
    //               </View>
    //             </View>
    //             </View>
    //           </Modal>
    //     </View>
    // </View>
 
export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    borderColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'blue',
    
  },
  containerHeader:{
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
 
  containerBody:{
    width: '100%',
    height: '40%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFF',
  },
  containerFooter1:{
    width: '100%',
    height: '50%',
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'space-around',
    
    //ir criando conforme a renderização?
    //box skills

  },
  containerFooter2:{
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    backgroundColor: 'orange',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 5,
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
    height: '100%'
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
  },
  modalFooter:{
    flexDirection: 'row',
    justifyContent: 'space-around', //lembrar
    width: '100%',
    height: '100%',
    backgroundColor: 'violet',
    marginTop: 1,
    padding: 10,
    flexWrap: 'wrap'
  },
  boxAtt:{
    width: 125,
    height: 38,
    backgroundColor: 'blue',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    margin: 10
    
  },
  txtModal:{
    color: '#DDD',
    fontWeight: 'bold',
    fontSize: 16,
    fontStyle: 'italic'
  }
});
