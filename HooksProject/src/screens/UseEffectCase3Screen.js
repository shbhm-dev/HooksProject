import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function useEffectCase3Screen() {
  const [following, setFollowing] = useState(false);
  const [content, setContent] = useState('');
  useEffect(() => {
    console.log('useEffect starts executing');

    const pageContent =
      'useEffect serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API';
    Promise.resolve(pageContent).then((data) => {
      setContent(data);
    });

    return function cleanup() {
      console.log('useEffect cleanup --call after exit this screen');
    };
  }, [following]);

  return (
    <>
      {following ? (
        <View style={styles.container}>
          <Text style={styles.pageStyle}>{content}</Text>
          <Text>Unfollow to hide the Content of the page</Text>
          <Button title="Unfollow" onPress={() => setFollowing(false)} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>Follow to See the Content of the page</Text>
          <Button title="Follow" onPress={() => setFollowing(true)} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
  pageStyle: {
    fontSize: 30,
  },
});
