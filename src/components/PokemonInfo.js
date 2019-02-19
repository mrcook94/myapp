import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PokemonInfo extends Component {
	render() {
		return (
			<View>
				<Text style={{
					fontSize: 20,
					fontWeight: 'bold'
				}}>
					{this.props.pokemonTitle}:{'   '}
					<Text style={{
						color: 'red'
					}}>
						{this.props.pokemonDetail}
					</Text>
				</Text>
			</View>
		)
	}
}
