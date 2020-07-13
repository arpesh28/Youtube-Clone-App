import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Components and Screens
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import VideoPlayer from './src/screens/VideoPlayer';

// Navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { reducer } from './src/reducers/reducer';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          } else if (route.name === 'Subscribed') {
            iconName = 'subscriptions';
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fc0707',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='Explore' component={Explore} />
      <Tabs.Screen name='Subscribed' component={Subscribe} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='rootHome' component={RootHome} />
          <Stack.Screen name='search' component={Search} />
          <Stack.Screen name='videoPlayer' component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: 'blue',
  },
});
