import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

const LittleCard = ({ name }) => {
  return (
    <View style={styles.LittleCard}>
      <Text style={styles.cardText}>{name}</Text>
    </View>
  );
};

const Explore = () => {
  const cardData = useSelector((state) => {
    return state;
  });
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 20,
          }}
        >
          <LittleCard name='Gaming' />
          <LittleCard name='Movies' />
          <LittleCard name='Trending' />
          <LittleCard name='Music' />
          <LittleCard name='News' />
          <LittleCard name='Fashion' />
        </View>
        <Text style={{ margin: 8, fontSize: 22, borderBottomWidth: 1 }}>
          Trending Videos
        </Text>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8e8',
  },
  LittleCard: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    elevation: 5,
    margin: 8,
    borderRadius: 5,
    justifyContent: 'center',
  },
  cardText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
  },
});

export default Explore;
