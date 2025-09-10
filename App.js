import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  
  const [pesso, setPesso] = useState('');
  const [altura , setAltura] = useState('')
  const [result, setReslt] = useState(null)
  const [massage , setMessage] = useState('')

  const calcular = () => {
    if(pesso && altura){
      console.log(pesso/(altura*altura));
      
      alert(pesso/(altura*altura))
      return pesso/(altura*altura)
    }else{
      alert("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    }
  }


  return (
    <View style={styles.container}>
      <Text>
        Calcule seu IMC
      </Text>
      <StatusBar style="auto" />
      
      <View>
        <TextInput placeholder='pesso'
        keyboardType='numeric'
        value={altura}
        onChange={setAltura}
        />
        
        <TextInput placeholder='altura'
        keyboardType='numeric'
        value={pesso}
        onChange={setPesso}
        />
      </View>

      <Button onPress={() => calcular()}title='hihi'>
        calcular
      </Button>
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