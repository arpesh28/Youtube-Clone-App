import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.HomeRoot}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeRoot: {
    flex: 1,
    backgroundColor: '#ffe8e8',
  },
});
