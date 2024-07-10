import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import { Link, useRouter } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {
  const router = useRouter();

  function BtnLogin() {
    router.push("/tabs/home");
  }

  function navigateToCadastro() {
    router.push('/stacks/cadastro');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Image source={require('../imgs/logoroxa.png')} style={styles.logo} />
      <Text style={styles.title}>Fazer Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={BtnLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>OU</Text>
      </View>

      {/* Botão de Login com Google */}
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={24} color="white" />
        <Text style={styles.googleButtonText}>Entrar com Google</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={navigateToCadastro}>
          <Text style={styles.titulo}>Ainda não possui conta?</Text>
          <Text style={styles.link}>Cadastre-se aqui!</Text>
        </TouchableOpacity>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    alignItems: 'center',
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
  titulo: {
    fontSize: 18,
    marginTop: 20,
  },
  link: {
    color: '#7E57C2',
    textDecorationLine: 'underline',
    marginLeft: 37,
    marginTop: 5,
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
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
  orContainer: {
    marginVertical: 20,
  },
  orText: {
    fontSize: 18,
    color: '#7E57C2',
    fontWeight: 'bold',
  },
  cadastroText: {
    marginTop: 20,
    color: '#7E57C2',
  },
});
