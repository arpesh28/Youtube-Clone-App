import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const MiniCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={styles.image}
      />
      <View style={styles.cardText}>
        <Text ellipsizeMode={'tail'} numberOfLines={2} style={styles.cardTitle}>
          {props.title}
        </Text>
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={1}
          style={styles.cardChannelName}
        >
          {props.channel}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    marginBottom: 8,
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 25,
  },
  cardText: {
    padding: 10,
    marginLeft: 5,
    justifyContent: 'center',
    width: Dimensions.get('screen').width - 180,
  },
  cardTitle: { fontWeight: 'bold', fontSize: 18, color: '#333333' },
  cardChannelName: { color: '#545454' },
});

export default MiniCard;
