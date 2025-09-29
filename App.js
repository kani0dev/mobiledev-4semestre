import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcular = () => {
    if (peso && altura) {
      const pesoNum = parseFloat(peso.replace(',', '.'));
      const alturaNum = parseFloat(altura.replace(',', '.'));

      if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
        Alert.alert('Erro', 'Digite valores válidos.');
        return;
      }

      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(imc.toFixed(2));

      if (imc <= 18.5) {
        setMensagem(`magreza puro osso\nIMC: ${imc.toFixed(2)}`);
      } else if (imc > 18.5 && imc <= 24.9) {
        setMensagem(`normal\nIMC: ${imc.toFixed(2)}`);
      } else if (imc > 25 && imc <= 29.9) {
        setMensagem(`Sobrepeso\nIMC: ${imc.toFixed(2)}`);
      } else if (imc > 30 && imc <= 34.9) {
        setMensagem(`super gordo nivel 1\nIMC: ${imc.toFixed(2)}`);
      } else if (imc > 35 && imc <= 39.9) {
        setMensagem(`super gordo nivel 2\nIMC: ${imc.toFixed(2)}`);
      } else {
        setMensagem(`Super obeso nivel deus\nIMC: ${imc.toFixed(2)}`);
      }
    } else {
      Alert.alert('Erro', 'Preencha peso e altura.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={calcular} />

      {mensagem ? (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{mensagem}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    width: '80%',
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
