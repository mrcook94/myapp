import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingText: true,
      secondNumber: 0,
      minuteNumber: 0,
      hourNumber: 0,
    };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        {
          isShowingText: !previousState.isShowingText,
          secondNumber: previousState.secondNumber + 1,
        }
      ))
    ), 1000);
    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedState ' + 1)
    return state
  }

  componentDidMount() {
    console.log('componentDidMount ' + this.state.secondNumber)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshot... ' + this.state.secondNumber)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate ' + this.state.secondNumber)
    if (this.state.secondNumber !== 0) {
      if (this.state.secondNumber % 60 === 0) {
        this.setState(state => (
          {
            secondNumber: 0,
            minuteNumber: state.minuteNumber + 1,
          }
        ))
      }
    }
    if (this.state.minuteNumber !== 0) {
      if (this.state.minuteNumber % 60 === 0) {
        this.setState(state => (
          {
            minuteNumber: 0,
            hourNumber: state.minuteNumber + 1,
          }
        ))
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Hello World!!! </Text>
        <Text style={styles.times}> {this.state.hourNumber} : {this.state.minuteNumber} : {this.state.secondNumber} </Text>
      </View>
    )
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  times: {
    textAlign: 'center',
    fontSize: 40,
    margin: 15,
    color: '#EE0000'
  }
});
