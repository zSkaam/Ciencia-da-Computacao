import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [chave, setChave] = useState('');
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

const salvar = async () => {
  try {
    await AsyncStorage.setItem(chave, valor);
    console.log('Item salvo!');
  } catch (error) {
    console.log('Erro ao salvar');
  }
};

const remover = async () => {
  await AsyncStorage.removeItem(chave);
  console.log('Removido com sucesso');
};


const ler = async () => {
  const result = await AsyncStorage.getItem(chave);
  setResultado(result || 'Nada encontrado');
};

const listarChaves = async () => {
  const keys = await AsyncStorage.getAllKeys();
  console.log('Chaves salvas: ' + keys.join(', '));
};

const listarTodos = async () => {
  const keys = await AsyncStorage.getAllKeys();
  console.log('Chaves salvas: ' + keys.join(', '));
};


  return (
    <ScrollView style={styles.container}>
    <View style={styles.container}>
      <Text>AsyncStorage - Exemplo 1</Text>
      <TextInput placeholder="Key" value={chave} onChangeText={setChave} style={styles.input} />
      <TextInput placeholder="Value" value={valor} onChangeText={setValor} style={styles.input} />
  
    <Pressable style={styles.botao} onPress={salvar}> 
    <Text style={styles.botaotext}>SALVAR</Text>
    </Pressable>

    <Pressable style={styles.botao} onPress={ler}> 
    <Text style={styles.botaotext}>LER</Text>
    </Pressable>
    
    <Pressable style={styles.botao} onPress={remover}> 
    <Text style={styles.botaotext}>REMOVER</Text>
    </Pressable>
    
    <Pressable style={styles.botao} onPress={listarChaves}> 
    <Text style={styles.botaotext}>LISTAR CHAVES</Text>
    </Pressable>

    <Pressable style={styles.botao} onPress={listarTodos}> 
    <Text style={styles.botaotext}>LISTAR TODOS</Text>
    </Pressable>
    
    <Text>Resultado: {resultado}</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20, alignItems:"center" },
  input: { borderWidth:1, margin:5, padding:8 },
  botao:{backgroundColor:"blue",
  paddingVertical:12,
  paddingHorizontal:24,
  borderRadius:8,
  marginVertical:10,
  width:"60%"},
  botaotext:{color:"white",fontSize:16,fontWeight:"bold",textAlign:"center"}
});
