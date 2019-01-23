import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

export default class ClockScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textView}> ClockScreen </Text>
      </View>
    )
  }
}

styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
      alignItems: 'center'
    },
    textView: {
      fontSize: 20,
      textAlign: 'center'
    }
  }
)
