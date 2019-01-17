import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Details Screeen</Text>

        <View style={{marginTop: 30}}>
          <Button style={{marginTop: 20}}
            title='Go Home'
          />
          <Button style={{marginTop: 20}}
            title='Go Back'
          />
        </View>
      </View>
    )
  }
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonStyle: {
    marginTop: 10
  }
})