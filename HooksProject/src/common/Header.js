import React from 'react';
import {Text} from 'react-native';

const Header = ({title}) => {
  return <Text style={styles.textStyle}>{title}</Text>;
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default Header;
