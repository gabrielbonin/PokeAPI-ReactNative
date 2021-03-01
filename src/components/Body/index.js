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
      height: response.data.height,
      name: response.data.name,
      img: response.data.sprites.front_default,
      type: response.data.types[0].type.name,
      weight: response.data.weight
      
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
          <View style={styles.containerHeader}>
          <Image resizeMode="stretch" style={styles.fundo} source={require('../../assets/fundo.jpg')}></Image>
          <Modal transparent={true} animationType={'slide'} visible={this.state.modalVisible}>
                 <View style={{width: '100%', height: 200, marginTop: 155, alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{width: 80, height: 30, padding: 3, marginTop: 60, alignItems: 'center', justifyContent: 'flex-start'}}>
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
              <View style={styles.modalFooterHeader}></View>
                   <View style={styles.boxAtt}>
                     <View style={styles.headerBoxAtt}/>
                   <Text style={styles.txtModal}>Nome: {this.state.pokemon.name}</Text>
                   </View>
                   <View style={styles.boxAtt}>
                   <View style={styles.headerBoxAtt}/>
                   <Text style={styles.txtModal}>Altura: {this.state.pokemon.height}</Text>
                   </View>
                   <View style={styles.boxAtt}>
                   <View style={styles.headerBoxAtt}/>
                   <Text style={styles.txtModal}>Tipo: {this.state.pokemon.type}</Text> 
                   </View>
                   <View style={styles.boxAtt}>
                   <View style={styles.headerBoxAtt}/>
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
    backgroundColor: 'white',
    
  },
  containerHeader:{
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  containerBody:{
    width: '100%',
    height: '70%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFF',
  },
  containerFooter1:{
    width: '100%',
    height: '41%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around',
    
    //ir criando conforme a renderização?
    //box skills

  },
  containerFooter2:{
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 5,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputPk:{
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 5,
    width: 300,
    height: 30,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
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
    backgroundColor: 'white',
    padding: 0,
    flexWrap: 'wrap',
    
  },
  modalFooterHeader:{
    width: 410,
    height: 15,
    backgroundColor: 'red',
    borderBottomEndRadius: 5
  },
  headerBoxAtt:{
    width: '100%',
    height: 8,
    backgroundColor: 'red',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  boxAtt:{
    width: 130,
    height: 48,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 3,
    margin: 10,
    borderWidth: 1,
    elevation: 3,
    borderColor: '#DDD'
    
  },
  txtModal:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    fontStyle: 'italic'
  }
});
