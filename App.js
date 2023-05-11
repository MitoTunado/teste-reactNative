import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() { 
  return (
    <KeyboardAvoidingView style={styles.background}> 


      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText2}><Text style={styles.titleText}>IF</Text>ICHAS - ALUNO</Text>  
          <Text style={styles.titleDescription}> Software inteligente de gestão de fichas.</Text>
        </View>
          <TextInput
          style={styles.input}
          placeholder="Matricula"
          autoCorrect={false}
          onChangeText={()=> {}} //nao salvar em canto algum ou salvar como local storage
          /> 

          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=> {}} //nao salvar em canto algum ou salvar como local storage
          />

          <TouchableOpacity style={styles.btnForgotPassword}>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Fazer Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Criar Conta</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    alignItems: 'center',
    height: '100%',
  }, 
  container: {
    marginTop: 70,
    width: '90%',
    //backgroundColor: '#FA3F30',
    height: '100%',
  },
  input:{ 
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom:15,
    color: '#222',
    fontSize:12,
    borderRadius: 5.35,
    padding: 8,
    borderWidth: 3,
    borderColor: '#E7E9ED',
    marginTop: 30,
  },
  forgotPassword:{
    color: '#BA6C6D',
    fontSize: 11,
    fontFamily: 'inter',
    fontWeight: 'bold', 
  },
  btnSubmit:{
    backgroundColor: '#61B482',
    width: '100%',
    height: 45,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5.35,
    borderWidth: 1,
    color: '#000',
  },
  submitText:{
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'inter',
    fontWeight: 'bold', 
  },
  btnRegister:{ 
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    marginBottom: 200,
  },
  titleText:{
    color: '#61B482', 
    fontSize: 26,
    fontFamily: 'inter',
    fontWeight: 'bold',  
  },
  titleText2:{
    color: '#4C4E52',
    fontSize: 26,
    fontFamily: 'inter',
    fontWeight: 'bold',  
  },
  titleDescription: {
    color: '#9BA0AA',
    fontSize: 11,
    fontFamily: 'inter',
    fontWeight: 'medium',
    marginBotton: 100,
  },
  btnForgotPassword:{
    marginBottom: 50, 
    marginLeft: 229,
  }
})