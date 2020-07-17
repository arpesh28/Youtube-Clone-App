import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constant from 'expo-constants';
import { WebView } from 'react-native-webview';

const VideoPlayer = ({ route }) => {
  const { videoID, title } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.WebViewWrapper}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoID}` }}
        />
      </View>
      <Text style={styles.WebViewText} numberOfLines={2} ellipsizeMode='tail'>
        {title}
      </Text>
      <View style={{ borderBottomWidth: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight + 25,
  },
  WebViewWrapper: {
    width: '100%',
    height: 300,
  },
  WebViewText: {
    fontSize: 20,
    width: Dimensions.get('screen').width - 50,
    margin: 9,
  },
});

export default VideoPlayer;
