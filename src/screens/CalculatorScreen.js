import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet,
  AsyncStorage,
} from 'react-native'

import {
  StackActions,
  NavigationActions,
} from 'react-navigation'

export default class CalculatorScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textView}> Calculator Screen </Text>
        <Button
          title='Đăng Xuất'
          onPress={this.handleLogOut}
        />
      </View>
    )
  }
  handleLogOut = async () => {
    await AsyncStorage.clear()
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Auth' })],
    });
    this.props.navigation.dispatch(resetAction);
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
