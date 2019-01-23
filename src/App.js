import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import ClockScreen from './screens/ClockScreen'
import CalculatorScreen from './screens/CalculatorScreen'
import LoadingScreen from './screens/LoadingScreen'
import LogInScreen from './screens/LogInScreen'

import {
  StackActions,
  NavigationActions,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'


const AppTabContainer = createBottomTabNavigator(
  {
    CalculatorTab: CalculatorScreen,
    ClockTab: ClockScreen,
  }
)

const AppContainer = createAppContainer(createStackNavigator(
  {
    Loading: LoadingScreen,
    Auth: LogInScreen,
    App: AppTabContainer,
  },
  {
    navigationOptions: {
      headerLeft: null
    }
  }
))

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App