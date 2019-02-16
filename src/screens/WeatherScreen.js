import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native'

export class WeatherScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.textStyle}
        >
          Nhiệt độ Hà Nội đang là:
        </Text>
        <TextInput
          placeholder='Nhập tên thành phố'
        />
      </View>
    )
  }
}

export default WeatherScreen

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }
)


