import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Card(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoPlayer', {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={styles.image}
        />
        <View style={styles.cardTexts}>
          <View style={styles.dpWrapper}>
            <FontAwesome5 name='user' style={styles.dp} />
          </View>
          <View style={styles.texts}>
            <Text
              style={styles.cardTitle}
              ellipsizeMode='tail'
              numberOfLines={2}
            >
              {props.title}
            </Text>
            <Text
              style={styles.cardDesc}
              ellipsizeMode='tail'
              numberOfLines={1}
            >
              {props.channel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
