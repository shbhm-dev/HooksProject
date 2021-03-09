import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TotalSum = ({calculateSum}) => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(calculateSum());
  }, [calculateSum]);

  return <Text>Total sum = {sum}</Text>;
};

export default function UseCallbackScreen() {
  const [name, setName] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const calculateSumCallback = useCallback(() => {
    console.log('I was called');
    return Number(num1) + Number(num2);
  }, [num1, num2]);

  return (
    <View style={styles.container}>
      <Text>Enter Name :</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText)}
      />
      <Text>Enter Number 1 :</Text>

      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newText) => setNum1(newText)}
      />
      <Text>Enter Number 2 :</Text>

      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newText) => setNum2(newText)}
      />
      <TotalSum calculateSum={calculateSumCallback} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  inputStyle: {
    margin: 10,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
});
