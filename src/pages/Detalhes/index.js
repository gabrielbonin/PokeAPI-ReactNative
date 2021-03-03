import React, {useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../service/api';
import { useEffect } from 'react';
import { SvgUri } from 'react-native-svg';


export default function Detalhes({route}){
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    async function loadDetails(){
      setLoading(true)
      const responsePoke = await api.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemonID}/`)
      const data = {
        img: responsePoke.data.sprites.other.dream_world.front_default,
        statsHp: responsePoke.data.stats[0].base_stat,
        statsHpName: responsePoke.data.stats[0].stat.name,
        statsAtack: responsePoke.data.stats[1].base_stat,
        statsHpAtackName: responsePoke.data.stats[1].stat.name,
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
          {
          loading
          ? 
          <View style={styles.loading}>
            <ActivityIndicator  color="#09A6FF" size={40}/>
          </View>
          :
          <SvgUri width="300" height="260" uri={pokemon.img}/>
          }
          <View style={styles.bodyDetails}>
            <Text style={styles.detailsText}>{pokemon.statsHp}</Text>
            <Text style={styles.detailsText}>{pokemon.statsHpName}</Text>
            <Text style={styles.detailsText}>{pokemon.statsAtack}</Text>
            <Text style={styles.detailsText}>{pokemon.statsHpAtackName}</Text>
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    
  },
  detailsText:{
    color: '#000',
    fontSize: 24
  },
  imgPoke:{
    width: 50,
    height: 70,
  },
  bodyDetails:{
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#DDD',
    flexDirection: 'column',
  },
  loading:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});