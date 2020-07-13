import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Subscribe = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Subscribe Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Subscribe;
