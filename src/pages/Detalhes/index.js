import React, {useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../service/api';
import { useEffect } from 'react';
import { SvgUri } from 'react-native-svg';
import typeColors from '../../helpers/typeColors';


export default function Detalhes({route, pokemonData}){
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true)
    async function loadDetails(){
      const responsePoke = await api.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemonID}/`)
      const data = {
        img: responsePoke.data.sprites.other.dream_world.front_default,
        statsHp: responsePoke.data.stats[0].base_stat,
        statsAtack: responsePoke.data.stats[1].base_stat,
        abilities: responsePoke.data.abilities[0].ability.name,
        exp: responsePoke.data.base_experience,
      }
      setLoading(false)
      setPokemon(data)
    }
    loadDetails()
  },[])

  
  return(
    <View style={styles.container}>
        <Header/>
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            {
              loading
              ? 
              <View style={styles.loading}>
                <ActivityIndicator  color="#09A6FF" size={80}/>
              </View>
              :
              <SvgUri width="400" height="250" style={styles.imgPoke} uri={pokemon.img}/>
            }
          </View>
          <View style={styles.bodyDetails}>
            <View style={styles.cardDetails}>
            <Text style={styles.detailsText}>VIDA: {pokemon.statsHp}</Text>
            </View>
            <View style={styles.cardDetails}>
            <Text style={styles.detailsText}>ATAQUE: {pokemon.statsAtack}</Text>
            </View>
            <View style={styles.cardDetails}>
            <Text style={styles.detailsText}>ABILIDADE: {pokemon.abilities}</Text>
            </View>
            <View style={styles.cardDetails}>
            <Text style={styles.detailsText}>EXP_BASE: {pokemon.exp}</Text>
            </View>
          </View>
        </View>
       <Footer/>
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
   flex: 1
  },
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  bodyHeader:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 5,
    borderWidth: 1,
  },
  bodyDetails:{
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#DDD',
    flexDirection: 'column',
    borderRadius: 5,
    borderWidth: 1,
  },

  detailsText:{
    color: '#FFF',
    fontSize: 24
  },
  imgPoke:{
    marginTop: 45
  },
  loading:{
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  cardDetails:{
    width: '64%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#09A6FF',
    padding: 5,
    borderRadius: 5,
    marginBottom: 4,
    marginTop: 10
  }
});