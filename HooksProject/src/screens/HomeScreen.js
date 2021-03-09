import React from 'react';
import CustomButton from '../common/CustomButton';
import Header from '../common/Header';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Header title={'Hooks'} />
      <CustomButton
        children={'useEffect case 1'}
        pressed={() => navigation.navigate('UseEffectCase1Screen')}
      />
      <CustomButton
        children={'useEffect case 2'}
        pressed={() => navigation.navigate('UseEffectCase2Screen')}
      />
      <CustomButton
        children={'useEffect case 3'}
        pressed={() => navigation.navigate('UseEffectCase3Screen')}
      />
      <CustomButton
        children={'useMemo'}
        pressed={() => navigation.navigate('UseMemoScreen')}
      />
      <CustomButton
        children={'useCallback'}
        pressed={() => navigation.navigate('UseCallbackScreen')}
      />
      <CustomButton
        children={'Custom Hook'}
        pressed={() => navigation.navigate('CustomHookScreen')}
      />
    </View>
  );
};
export default HomeScreen;
