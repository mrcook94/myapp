import React, { Component } from 'react'

import ClockScreen from './screens/ClockScreen'
import CalculatorScreen from './screens/CalculatorScreen'
import LoadingScreen from './screens/LoadingScreen'
import LogInScreen from './screens/LogInScreen'
import PokemonListScreen from './screens/PokemonListScreen'
import WeatherScreen from './screens/WeatherScreen'
import RepeatWeatherScreen from './screens/RepeatWeatherScreen'

import {
	StackActions,
	NavigationActions,
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
} from 'react-navigation'

import { Provider } from 'react-redux'
import store from './store/index'

const WeatherStack = createStackNavigator(
	{
		WeatherInput: WeatherScreen,
		WeatherView: RepeatWeatherScreen,
	},
	{
		headerMode: 'none'
	}
)

const AppTabContainer = createBottomTabNavigator(
	{
		CalculatorTab: CalculatorScreen,
		ClockTab: ClockScreen,
		WeatherTab: WeatherStack,
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
		},
		headerMode: 'none'
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