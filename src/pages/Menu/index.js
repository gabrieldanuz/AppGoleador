import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native'

export default function Menu() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
    <Text style={styles.title}>Bem vindo ao Goleador</Text>
        <View style={styles.goleador}>
          <TouchableOpacity style={styles.jogador}
           onPress={() => navigation.navigate('CadastroJogador')}
          >
            <Image 
            source={require('../../assets/ic_jogador.png')}
            />
            <Text style={styles.textGols}>Cadastrar Goleador</Text>
          </TouchableOpacity>
        </View>
          <View style={styles.header}>
            <TouchableOpacity style={styles.buttonGols}>
            <Image 
            source={require('../../assets/ic_bola.png')}
            />
            <Text style={styles.textGols}>Registra os teus gols aqui</Text>
            </TouchableOpacity>
          </View>
            <View style={styles.quantGols}>
              <Text style={styles.textGols}>Quantidade de Gols:</Text>
              <Text style={styles.textGols}>50</Text>
            </View>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cdff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    marginLeft: 10,
    color: '#FFF'
  },
  buttonGols: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  textGols: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 5
  },
  jogador: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 20
  },
  quantGols: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }

})