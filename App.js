import { View, Text, StyleSheet, TextInput, Button, FlatList } from "react-native";
import { useState } from 'react';

export default function App (){

  const [ task, setTask ] = useState("");
  const [ tasks, setTasks ] = useState([]);

  const addTask = () => {
    setTasks([...tasks, 
      {key: Math.random().toString(), 
      value: task}])
      setTask("");
      console.log(task);
      
  }


  return(
    <View style={estilos.app}>
      <Text style={estilos.titulo}>
        Lista de Tarefas
      </Text>

      <TextInput
      style={estilos.input}
      placeholder="Adicionar Nova Tarefa"
      onChangeText={setTask}
      onPress={task}
      value={task}/>
      

      <Button style={estilos.botao}
      title="Adicionar"
      onPress={addTask}>
      </Button>

      <FlatList
      data={tasks}
      renderItem={({ item }) =>{
        <Text
        style={estilos.tarefa}>
          {item.value}
        </Text>
      }} />
    </View>
  )
}

const estilos = StyleSheet.create ({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 150,
    marginBottom: 50,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 5,
    height: 60,
    width: 300,
    marginBottom: 50,
    fontSize: 15,
    textAlign: 'center'
  },
  tarefa: {
    fontSize: 18,
    borderBottomWidth: 5,
    borderBottomColor: 'red',
    marginBottom: 25,

  },
  // botao: {
  //   borderRadius: 5,
  // }
})