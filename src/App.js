import React, { Component } from 'react'

import ClockScreen from './screens/ClockScreen'
import CalculatorScreen from './screens/CalculatorScreen'
import LoadingScreen from './screens/LoadingScreen'
import LogInScreen from './screens/LogInScreen'
import PokemonListScreen from './screens/PokemonListScreen'

import {
  StackActions,
  NavigationActions,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import { Provider } from 'react-redux'
import store from './store/index'

const AppTabContainer = createBottomTabNavigator(
  {
    CalculatorTab: CalculatorScreen,
    ClockTab: ClockScreen,
    PokemonTab: PokemonListScreen,
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
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App