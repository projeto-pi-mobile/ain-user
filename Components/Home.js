import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ainApi from '../services/ainApi';

import styles from './Styles/Styles';

export default function ResetPass({ navigation }) {
  const [atividades, setAtividades] = useState([])
  // const [atividades, setAtividades] = useState([])

  
  //Toda vez que carregar o componente ele executa isso
  useEffect(()=>{
    
    ainApi.get('/api/professional').then(results => {
      setAtividades(results.data)
    })
    
  }, [])
  
  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.scrollView}>
            {atividades?.map(atividade=>(
              <TouchableHighlight style={styles.itemProfile} onPress={() => navigation.navigate('ProfessionalProfile', {id:atividade.id})}>
                <View style={styles.button}>
                  <Text>{atividade.title} - {atividade.author} - Nº de Acessos: {atividade.acessos}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
