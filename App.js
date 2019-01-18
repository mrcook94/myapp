import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './src/components/HomeScreen'
import DetailsScreen from './src/components/DetailsScreen'
import ScrollViewScreen from './src/components/ScrollViewScreen'


class TestHome extends Component {
  render() {
    return (
      <View>
        <Text>
          Home Screen
        </Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Scroll: ScrollViewScreen,
  },
  {
    initialRouteName: 'Home',
  }

)
const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App