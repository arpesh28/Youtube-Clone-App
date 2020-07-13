import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const VideoPlayer = () => {
  return (
    <View style={container}>
      <Header />
      <Text>Video Player Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoPlayer;
