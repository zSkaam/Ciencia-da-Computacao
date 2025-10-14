import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
export default function App() {
  const [valorBRL, setValorBRL] = useState('');
  const [resultado, setResultado] = useState(null);

const converterParaUSD = async () => {
    if (!valorBRL) return;
    const valorFormatado = valorBRL.replace(',', '.');
    try {
      const res = await fetch('https://economia.awesomeapi.com.br/json/last/BRL-USD');
      const data = await res.json();
      const cotacao = parseFloat(data.BRLUSD.bid);
      const convertido = parseFloat(valorFormatado) * cotacao;
      setResultado(convertido.toFixed(2));
    } 

catch (error) {
      Alert.alert('Erro', 'Não foi possível obter a cotação.');
      console.log(error);
    }
  };
  return (
<View style={styles.container}>
      <Text style={styles.title}>Conversor BRL → USD</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em BRL"
        keyboardType="numeric"
        value={valorBRL}
        onChangeText={setValorBRL}
      />
      <Button title="Converter" onPress={converterParaUSD} />
      {resultado && (
        <Text style={styles.resultado}>
          = {resultado} USD
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 18,
  },
  resultado: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
