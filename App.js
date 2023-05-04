import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const[name,setName] = useState('Semih');
  const[person,setPerson] =useState({name:'Furkan', age: 27});
  
  const clickHandler = () => {
    setName('Koray');
    setPerson({name:'Koray', age: 23});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hello! {name}</Text>
        <Text>{person.name} {person.age} years old.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Click Me!' onPress={clickHandler}></Button>
      </View>
      <StatusBar style="auto" />
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
  buttonContainer: {
    marginTop:20,
  },
});
