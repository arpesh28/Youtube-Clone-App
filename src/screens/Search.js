import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Constant from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import { useSelector, useDispatch } from 'react-redux';

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyALzk8VHiL2HLvYxQ8DBFE8WFWTOxtrWf8

const SearchScreen = ({ navigation }) => {
  const [value, setValue] = useState('');
  // const [miniCardData, setMiniCard] = useState([]);
  const dispatch = useDispatch();
  const miniCardData = useSelector((state) => {
    return state;
  });
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      // `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyALzk8VHiL2HLvYxQ8DBFE8WFWTOxtrWf8`
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}$type=video&key=AIzaSyDqmU_tktBZVrA_4Pn8EixVbUWD44iUiXE`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        // setMiniCard(data.items);
        dispatch({ type: 'add', payload: data.items });
      });
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchHeader}>
        <View style={styles.backBtn}>
          <Ionicons
            name='ios-arrow-back'
            size={30}
            color='white'
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.searchBox}>
          <View>
            <TextInput
              value={value}
              placeholder={'Search'}
              onChangeText={(text) => setValue(text)}
              style={{
                backgroundColor: '#f5f6f7',
                borderRadius: 10,
                width: 280,
                height: 45,
                paddingLeft: 20,
                fontSize: 17,
              }}
            />
          </View>
        </View>
        <View style={styles.sendBtn}>
          <MaterialCommunityIcons
            name='send-circle-outline'
            size={34}
            color='white'
            onPress={() => {
              fetchData();
            }}
          />
        </View>
      </View>
      <View style={{ marginBottom: 120 }}>
        {loading ? <ActivityIndicator size='large' color='#fc0707' /> : null}
        <FlatList
          data={miniCardData}
          renderItem={({ item }) => {
            return (
              <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#ffe8e8',
  },
  searchHeader: {
    paddingTop: Constant.statusBarHeight + 25,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fc0707',
    elevation: 20,
    shadowColor: 'blue',
  },
  searchBox: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  sendBtn: { marginLeft: 16 },
});

export default SearchScreen;
