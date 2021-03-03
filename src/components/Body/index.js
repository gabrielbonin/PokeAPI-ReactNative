import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../service/api';


export default function Body() {

  const [buscarPokemon, setBuscarPokemon] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  
  const navigation = useNavigation();

  
  
  async function buscarPk(){
    const Lower = buscarPokemon.toLowerCase();
    setModalVisible(true)
    const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${Lower}/`)
    const data = {
      id: response.data.id,
      height: response.data.height,
      name: response.data.name,
      img: response.data.sprites.front_default,
      type: response.data.types[0].type.name,
      weight: response.data.weight
      
    }
    setPokemon(data);

  }

 

  
  function sair(visible){
    setModalVisible(visible);
    setPokemon('');
    setBuscarPokemon('');
  }

  function irDetalhes() {
    setModalVisible(false);
    navigation.navigate('Detalhes', {pokemonID: pokemon.id})
    setBuscarPokemon('')
    setPokemon('')
  }
  
    return (
      <View style={styles.container}>
          <View style={styles.containerHeader}>
          <Image resizeMode="stretch" style={styles.fundo} source={require('../../assets/fundo.jpg')}></Image>
          <Modal transparent={true} animationType={'slide'} visible={modalVisible}>
                 <View style={{width: '100%', height: 200, marginTop: 155, alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{width: 80, height: 30, padding: 3, marginTop: 60, alignItems: 'center', justifyContent: 'flex-start'}}>
                     <Button title="Voltar" onPress={()=> sair(false)}/>
                   </View>
                <TouchableOpacity onPress={irDetalhes}>
                  <Image style={styles.pkImg} source={{uri: pokemon.img}}/>
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
                   <Text style={styles.txtModal}>Nome: {pokemon.name}</Text>
                   </View>
                   <View style={styles.boxAtt}>
                   <View style={styles.headerBoxAtt}/>
                   <Text style={styles.txtModal}>Altura: {pokemon.height}</Text>
                   </View>
                   <View style={styles.boxAtt}>
                   <View style={styles.headerBoxAtt}/>
                   <Text style={styles.txtModal}>Tipo: {pokemon.type}</Text> 
                   </View>
                   <View style={styles.boxAtt}>
                   <View style={styles.headerBoxAtt}/>
                   <Text style={styles.txtModal}>Peso: {pokemon.weight}</Text> 
                   </View>
                 </View>
            </View>
            <View style={styles.containerFooter2}>
            <TextInput style={styles.inputPk} placeholder="Pesquise um Pokemon" onChangeText={(value)=> setBuscarPokemon(value)}>{buscarPokemon}</TextInput>
               <TouchableOpacity onPress={buscarPk} style={styles.btnPesq}>
                 <Image style={styles.btnPesq} source={require('../../assets/pikachulupa.jpg')}/>
               </TouchableOpacity>
            </View>
          </View>
      </View>
      );
    
  }
 

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
    borderBottomWidth: 1,
    borderColor: 'red',
    marginTop: 5,
    width: 300,
    height: 30,
    borderRadius: 5,
    padding: 6,
    textAlign: 'left',
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
    width: 80,
    height:80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
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
