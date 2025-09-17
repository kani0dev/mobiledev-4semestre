import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  
  const [pesso, setPesso] = useState('');
  const [altura , setAltura] = useState('')
  const [result, setReslt] = useState()
  const [massage , setMessage] = useState('')

  const calcular = () => {
    if(pesso && altura){
      let imc =  pesso.replace(',','.')/(altura.replace(',','.')^2);
      
      setReslt(imc.toFixed(2));
      console.log(imc);
      console.log(result);
      
      
      switch(imc){
        case imc < 18.5: setMessage("magro") ;break;
        case imc > 18.5 && imc <= 24.9: setMessage("normal\npesso: ", imc);break;
        case imc > 25 && imc <= 29.9: setMessage("gordinho\npesso: ", imc);break;
        case imc > 30 && imc <= 34.9 : setMessage("Gigantesco\npesso: ", imc);break;
        default : setMessage("KRLTAMPANDO O SOL MANEKKKKKKKKKK\npesso: ", imc);break;
      }

    }else{
      alert("tem nao")
    }
  }


  return (
    <View style={styles.container}>
      <Text>
        Calcule seu IMC
      </Text>
      <StatusBar style="auto" />
      
      <View>
        <TextInput placeholder='altura'
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
        />
        
        <TextInput placeholder='pesso'
        keyboardType='numeric'
        value={pesso}
        onChangeText={setPesso}
        />
      </View>

      <Button onPress={() => calcular()}title='oi o q loco kkkkk'>
        calcular
      </Button>
      <h2>
        {massage}
        {pesso}
      </h2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});