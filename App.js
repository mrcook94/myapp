import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './src/components/HomeScreen'
import DetailsScreen from './src/components/DetailsScreen'




export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
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
  },
  {
    initialRouteName: 'Home',
  }

)
const AppContainer = createAppContainer(AppNavigator);