import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Card() {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1544441892-4284006e19ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        }}
        style={styles.image}
      />
      <View style={styles.cardTexts}>
        <View style={styles.dpWrapper}>
          <FontAwesome5 name='user' style={styles.dp} />
        </View>
        <View style={styles.texts}>
          <Text style={styles.cardTitle} ellipsizeMode='tail' numberOfLines={1}>
            React-Native tutorial
          </Text>
          <Text style={styles.cardDesc} ellipsizeMode='tail' numberOfLines={2}>
            This tutorial introduces you into the react-native world and let you
            explore.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardTexts: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  dpWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dp: {
    color: '#545454',
    fontSize: 25,
  },
  texts: {
    marginLeft: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#545454',
    marginBottom: 2,
    width: Dimensions.get('screen').width - 125,
  },
  cardDesc: {
    fontSize: 13,
    color: '#545454',
    width: Dimensions.get('screen').width - 125,
  },
});
