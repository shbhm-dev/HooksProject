import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function useEffectCase1Screen() {
  const [data, setData] = useState([]);
  const [color, setColor] = useState('black');
  const changeColor = () => {
    color === 'red' ? setColor('black') : setColor('red');
  };
  //   This useEffect will act  like the componentDidMount, will execute only on the first rendering.
  useEffect(() => {
    console.log('Component first Mount');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
      <Text>{data.title}</Text>
      <View>
        <Button title="Change Color" onPress={changeColor} />
        <View style={[styles.colorBox, {backgroundColor: color}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  colorBox: {
    height: 100,
    width: 100,
  },
});
