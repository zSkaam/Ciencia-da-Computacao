import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [chave, setChave] = useState('');
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

const salvar = async () => {
  try {
    await AsyncStorage.setItem(chave, valor);
    alert('Item salvo!');
  } catch (error) {
    alert('Erro ao salvar');
  }
};

const ler = async () => {
  const result = await AsyncStorage.getItem(chave);
  setResultado(result || 'Nada encontrado');
};

  return (
    <View style={styles.container}>
      <Text>AsyncStorage - Exemplo 1</Text>
      <TextInput placeholder="Key" value={chave} onChangeText={setChave} style={styles.input} />
      <TextInput placeholder="Value" value={valor} onChangeText={setValor} style={styles.input} />
    <Button title="Salvar" onPress={salvar} />    
    <Button title="Ler" onPress={ler} />
    <Text>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20 },
  input: { borderWidth:1, margin:5, padding:8 }
});
