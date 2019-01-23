import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
} from 'react-native'

import {
  StackActions,
  NavigationActions,
} from 'react-navigation'

class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Màn hình đăng nhập',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Log In to Continue!!! </Text>
        <Button
          title='Đăng Nhập'
          onPress={this.handleLogin}
        />
      </View>
    )
  }
  handleLogin = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    const logInresetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'App' })],
    })
    this.props.navigation.dispatch(logInresetAction)
  }
}

export default LogInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyles: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})