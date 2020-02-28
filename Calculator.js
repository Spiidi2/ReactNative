import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Calculator(props) {
const navigationOptions = {title: 'Calculator' ,};

const {navigate} = props.navigation;
const [number1, setNumber1] = useState(''); 
const [number2, setNumber2] = useState('');  
const [result, setResult] = useState('');
const [data, setData] = useState([]);


const sum = () => {
  const result2 = parseInt(number1) + parseInt(number2)
  setResult(parseInt(number1) + parseInt(number2))
  setData([...data, number1 + ' + ' + number2 + ' = ' + result2])
  }

const subtract = () => {
  const result2 = parseInt(number1) - parseInt(number2)
  setResult(parseInt(number1) - parseInt(number2))
  setData([...data, number1 + ' - ' + number2 + ' = ' + result2])
}


  return (
    <View style={styles.container}>
      <View style={styles.textinputContainer}>
      <Text>Result: {result} </Text>
      <TextInput keyboardType="numeric"  style={{width:200, borderColor:'gray',  borderWidth:2}} onChangeText={(text) => setNumber1(text)} value={number1}/>
      <TextInput keyboardType="numeric" style={{width:200, borderColor:'gray',  borderWidth:2}} onChangeText={(text) => setNumber2(text)} value={number2}/>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', marginTop: 20,  
        justifyContent:'space-evenly'}}>
        <Button onPress={sum} title="+"/>
        <Button onPress={subtract} title="-"/>
        </View>
        <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) =>
          <Text>{item}</Text>
        }/>
      </View>
      <View>
         <Text>History</Text> 
         <Button onPress={() => navigate ('History')} title='History' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    backgroundColor: '#fff',
    
  },
  textinputContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent:'flex-end'
  },
  list: {
    flex: 2,
    alignItems: 'center', 
  },
});
