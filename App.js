import { View, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { useState } from 'react';

export default function App() {

  const [peso, setPeso] = useState('');

  const [altura, setAltura] = useState('');

  const [resultado, setResultado] = useState(null);

  const [diag, setDiag] = useState('');

  const calcularIMC = () => {

    if (peso !== '' && altura !== '') {
      let pesoNum = (peso.replace(",", "."));

      let alturaNum = (altura.replace(",", "."));

      let imc = pesoNum / (alturaNum * alturaNum);

      setResultado(imc.toFixed(2));

      if (imc < 18.5) {
        setDiag('Magreza');
      }

      else if (imc >= 18.5 && imc <= 24.9) {
        setDiag('Normal');
      }

      else if (imc >= 25 && imc <= 29.9) {
        setDiag('Sobrepeso');
      }

      else if (imc >= 30 && imc <= 39.9) {
        setDiag('Obesidade');
      }

      else {
        setDiag('Obesidade Grave');
      }

    } else {
      alert('Por favor preencha o campo de peso e altura');
    }

  }

  return (
    <View style={styles.app}>
      <Text style={styles.titulo}>Calcule seu IMC</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite o peso"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite a altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
      </View>

      <View>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            pressed && { opacity: 0.8, backgroundColor: "#000000" },
          ]}
          onPress={calcularIMC}
        >
          <Text style={styles.btnText}>Clique aqui</Text>
        </Pressable>
      </View>

      <View style={styles.textos}>
        <Text>Resultado: {resultado}</Text>
        <Text>Diagnostico: {diag}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  titulo: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 300,
    height: 40,
    fontSize: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    textAlign: "center",
    backgroundColor: "white",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    width: 140,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#7DDA58",
    marginBottom: 30,
  },
  btnText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  textos: {
    alignItems: "center",
  },
});