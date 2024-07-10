import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function Cadastro() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  function BtnCadastrar() {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
    } else {
      // Lógica para processar os dados de cadastro
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      router.push("/tabs/home");
    }
  }

  const handleLoginGoogle = () => {
    // Lógica para login com Google aqui
    console.log('Login com Google');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('../imgs/logoroxa.png')} style={styles.logo} />
        <Text style={styles.title}>Cadastrar-se</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={text => setSenha(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmarSenha(text)}
        />
        <TouchableOpacity style={styles.button} onPress={BtnCadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <Text style={styles.orText}>OU</Text>
        </View>

        <TouchableOpacity style={styles.googleButton} onPress={handleLoginGoogle}>
          <FontAwesome name="google" size={24} color="white" />
          <Text style={styles.googleButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  input: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: 220,
    height: 50,
    backgroundColor: '#7E57C2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orContainer: {
    marginVertical: 20,
  },
  orText: {
    fontSize: 18,
    color: '#7E57C2',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DB4437',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});
