/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import validateLogin from '../utility/validateLogin';
import useForm from '../customHooks/useForm';
import CustomButton from '../common/CustomButton';
export default function CustomHookScreen() {
  const renderItem = (props) => {
    const {labelName, value, error, placeholder, onChangeText} = props;
    return (
      <>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelText}>{labelName}</Text>
          <TextInput
            onChangeText={(text) => onChangeText(text, labelName.toLowerCase())}
            autoCorrect={false}
            autoCapitalize="none"
            defaultValue={value}
            placeholder={placeholder}
            style={[
              styles.textInput,
              error ? {borderColor: 'red'} : {borderColor: 'grey'},
            ]}
          />
        </View>
      </>
    );
  };
  const submit = () => {
    console.log('submitted');
  };
  const {handleSubmit, handleChange, values, errors} = useForm(
    submit,
    validateLogin,
  );
  const INPUT_FIELDS = [
    {
      labelName: 'Email',
      error: errors.email,
      placeholder: 'username@gmail.com',
      onChangeText: handleChange,
      value: values.email,
    },
    {
      error: errors.password,
      labelName: 'Password',
      placeholder: 'password',
      onChangeText: handleChange,
      value: values.password,
    },
  ];
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Please Login!!</Text>
      <FlatList
        data={INPUT_FIELDS}
        keyExtractor={(item) => item.labelName}
        renderItem={({item}) => renderItem(item)}
      />
      {errors.email && (
        <Text style={styles.errorTextStyle}>{errors.email}</Text>
      )}
      {errors.password && (
        <Text style={styles.errorTextStyle}>{errors.password}</Text>
      )}
      <CustomButton children={'Login'} pressed={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontWeight: '600',
    textAlign: 'center',
    color: 'red',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 30,
  },
  containerStyle: {marginHorizontal: 20},
  inputFieldContainer: {
    marginTop: 12,
    marginBottom: 12,
    marginHorizontal: 24,
  },
  labelText: {
    fontSize: 20,
    fontFamily: 'arial',
    color: 'black',
    fontWeight: 'bold',
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
