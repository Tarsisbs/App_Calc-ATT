import {StyleSheet, Text, TextInput, Image, View, ScrollView, TouchableOpacity} from 'react-native';

import React,{useState} from 'react';

import styles from './css/style'
 
export default function App(){

  const [valor1,setValor1]=useState(0)
  const [valor2,setValor2]=useState(0)
  const [resultado,setResultado]=useState(0)

  const somar=()=>{
    setResultado (parseInt(valor1) + parseInt(valor2))
  }

  return(
 
    <ScrollView showsVerticalScrollIndicator = {false} style = {styles.viewScroll}>
 
      <View style = {styles.viewPrincipal}>
 
        <Text style = {styles.textoPrincipal}> Calculadora de Nerds</Text>
 
        <View style = {styles.viewImage}>
 
          <Image style = {styles.imagem} 

            source={{uri:'https://img.myloview.com.br/quadros/nerd-face-emoji-clever-emoticon-with-glasses-geek-or-student-700-192037364.jpg'}}>

          </Image>

          <TextInput placeholder='Escolha o Primeiro Valor' style = {styles.input}
            value = {String(valor1)}
            onChangeText={(texto)=>{setValor1(texto)}}
          ></TextInput>

          <TextInput placeholder='Escolha o Segundo Valor' style = {styles.input}
            value = {String(valor2)}
            onChangeText={(texto)=>{setValor2(texto)}}
          ></TextInput>

          <TouchableOpacity style = {styles.botao} onPress={somar}>Calcular</TouchableOpacity>

          <TextInput placeholder='Resultado' style = {styles.input}
            value = {String(resultado)}
            onChangeText={(texto)=>{setResultado(texto)}}
          ></TextInput>
 
        </View>
 
       
 
      </View>
 
    </ScrollView>
 
  )
}