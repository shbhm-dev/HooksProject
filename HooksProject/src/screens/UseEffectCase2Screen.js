/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import CustomButton from '../common/CustomButton';
export default function useEffectCase2Screen() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(['Learn React']);
  const [count, setCount] = useState(0);
  const renderItem = (item) => {
    return (
      <View style={styles.taskContainerStyle}>
        <Text style={styles.taskTextStyle}>{item}</Text>
      </View>
    );
  };
  useEffect(() => {
    setCount(count + 1);
  }, [taskList]);

  const addTask = () => {
    if (task && !taskList.includes(task)) {
      setTaskList([...taskList, task]);
    }
  };
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>ToDo List ({count})</Text>
      <TextInput
        onChangeText={(taskText) => setTask(taskText)}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="What is to be done"
        style={styles.textInput}
      />
      <CustomButton children="ADD TASK" pressed={addTask} />
      <FlatList
        data={taskList}
        keyExtractor={(item) => item}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 30,
  },
  containerStyle: {marginHorizontal: 50},
  taskContainerStyle: {
    marginVertical: 12,
    marginHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#007aff',
  },
  taskTextStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    alignSelf: 'center',
    fontFamily: 'arial',
    height: Dimensions.get('screen').height / 20,
    marginVertical: 10,
    width: Dimensions.get('screen').width * 0.8,
    marginHorizontal: 40,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'grey',
    fontSize: 14,
    paddingHorizontal: 16,
    color: 'black',
  },
});
