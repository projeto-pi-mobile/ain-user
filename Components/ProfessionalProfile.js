import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/Styles';
import ainApi from '../services/ainApi';

export default function ProfessionalProfile({ navigation, route }) {
  
  const [professional, setProfessional] = useState({})

  const { id } = route.params;
  
  console.log(id)
  
  useEffect(()=>{
    
    ainApi.get('/api/professional/'+ id).then(results => {
      setProfessional(results.data.professional)
    })
    
    
  }, [])

  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.bannerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="chevron-back-outline" style={styles.back} />
          </TouchableOpacity>
          <Image
            resizeMode="cover"
            style={styles.bannerContainerImage}
            source={require('../assets/img/professional_profile.png')}
            />
        </View>
        <View style={styles.main}>
          <ScrollView style={styles.scrollView}>
            <View>
              <Text style={styles.containerTitleText}>Detalhes do Usuário</Text>

              <Text style={styles.itemProfile}>Nome</Text>
              <Text>{professional.author}</Text>
            
              {/* <Text style={styles.itemProfile}>E-mail</Text>
              <Text>{professional.email}</Text> */}

              {/* <Text style={styles.itemProfile}>CPF</Text>
              <Text>{professional.cpf}</Text> */}

              <Text style={styles.itemProfile}>Telefone</Text>
              <Text>{professional.telefone}</Text>

              {/* <Text style={styles.itemProfile}>Minhas atividades</Text> */}
              
              {/* {atividades?.map(atividade=>(
                <Text>{atividade}</Text>
              ))} */}
            </View>
            <View>
              <Text style={styles.itemProfile}>Biografia</Text>
              <View  style={styles.container}>
                <Text>{professional.descricao}</Text>
              </View>
            </View>
            <View style={styles.formContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  <Ionicons name="logo-whatsapp" style={styles.buttonIcon} />Contratar
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
