import React, {useState, useMemo} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function useMemoScreen() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [color, setColor] = useState('red');

  const incrementCounter = (num) => {
    setCounterOne(counterOne + 1);
  };
  const decrementCounter = (num) => {
    setCounterTwo(counterTwo - 1);
  };
  //Slow Function
  //   If we remove useMemo it will run every time even counterOne is not changed
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 3000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  const changeColor = () => {
    color === 'red' ? setColor('black') : setColor('red');
  };

  return (
    <View style={styles.container}>
      <View>
        <Button title="increment" onPress={incrementCounter} />
        <Text>{counterOne}</Text>
        <Text>{isEven ? 'Even' : 'Odd'}</Text>
      </View>
      <View>
        <Button title="decrement" onPress={decrementCounter} />
        <Text>{counterTwo}</Text>
      </View>
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
