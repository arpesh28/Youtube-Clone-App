import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

export default function HomeScreen({ navigation }) {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={styles.HomeRoot}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeRoot: {
    flex: 1,
    backgroundColor: '#ffe8e8',
  },
});
