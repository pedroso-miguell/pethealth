import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_100Thin, Poppins_600SemiBold_Italic } from '@expo-google-fonts/poppins'

export default function Inicial() {
  const [fontLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_600SemiBold_Italic,
    Poppins_400Regular,
  });

  const router = useRouter();

  function BtnCadastro() {
    router.push('/stacks/cadastro'); 
  }

  function navigateToLogin() {
    router.push('/stacks/login');
  }

  return (
    <View style={styles.container}>
      <Image source={require('../imgs/logo.png')} style={styles.logo} />
      <View style={styles.miniContainer}>
        <Image source={require('../imgs/gato.png')} style={styles.gato} />
        <Text style={styles.titulo}>Amor e cuidado</Text>
        <Text style={styles.titulo2}>que seu pet merece!</Text>
        <TouchableOpacity style={styles.button} onPress={BtnCadastro}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.titulo3}>Já possui conta? <Text style={styles.link}>Entrar</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E57C2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -250 }], 
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  miniContainer: {
    marginTop: 520,
    height: 320,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  gato: {
    position: 'absolute',
    top: -85,
    right: 35,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'Poppins_400Regular',
  },
  titulo2: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',
  },
  titulo3: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'Poppins_100Thin'
  },
  link: {
    color: '#7E57C2',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#7E57C2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  },
});
