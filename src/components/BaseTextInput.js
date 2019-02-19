import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export class BaseTextInput extends Component {
	render() {
		return (
			<View>
				<TextInput
					placeholder={this.props.inputTitle}

				/>
			</View>
		)
	}
}

export default BaseTextInput
