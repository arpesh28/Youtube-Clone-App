import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <FontAwesome name='youtube-play' color={'white'} size={34} />
        <Text style={styles.youtube}>YouTube</Text>
      </View>
      <View style={styles.headerRight}>
        <FontAwesome name='video-camera' style={styles.logos} />
        <FontAwesome
          name='search'
          style={styles.logos}
          onPress={() => navigation.navigate('search')}
        />
        <Fontisto name='toggle-off' style={styles.logos} />
        {/* <Fontisto name='toggle-on' size={24} color='black' /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constant.statusBarHeight + 25,
    height: 120,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 20,
    backgroundColor: '#fc0707',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  youtube: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 22,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logos: {
    fontSize: 22,
    marginLeft: 30,
    color: 'white',
  },
});
