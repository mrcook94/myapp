import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonStart: 'Start',
      buttonPause: 'Pause',
      isStart: false,
      isPause: false,
      secondNumber: 0,
      minuteNumber: 0,
      hourNumber: 0,
    };

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

  _onPressStart() {
    // Toggle the state every second
    if (this.state.isStart === true) {
      this.setState({
        buttonStart: 'Start',
        isStart: false
      })
    } else {
      this.setState({
        buttonStart: 'Stop',
        isStart: true
      })
    }
  }

  timeRunning() {
    setInterval(() => (
      this.setState(previousState => (
        {
          secondNumber: previousState.secondNumber + 1,
        }
      ))
    ), 1000);
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}> Home Screen!!! </Text>
          <Text style={styles.timeView}>
            {this.state.hourNumber} : {this.state.minuteNumber} : {this.state.secondNumber}
          </Text>
        </View>
        <View>
          <View style={styles.buttonView}>
            <Button style={{ marginRight: 5 }}
              title={this.state.buttonStart}
              onPress={this._onPressStart.bind(this)}
            />
            <Button style={{ marginLeft: 5 }}
              title={this.state.buttonPause}
            />
          </View>
          <Button
            style={styles.buttonStyle}
            title="Click Me!!!"
            accessibilityLabel="Click to see details"
            onPress={() => navigate('Details')}
          />
        </View>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  timeView: {
    textAlign: 'center',
    fontSize: 40,
    margin: 15,
    color: '#EE0000',
    backgroundColor: 'powderblue',
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  buttonStyle: {
    height: 50,
    width: 50,
    textAlign: 'center',
    margin: 10,
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
})