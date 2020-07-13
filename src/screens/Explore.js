import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Explore = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Explore Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Explore;
