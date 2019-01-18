import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const formattedTime = (sec) =>
  ('0' + Math.floor(sec / 3600)).slice(-2) +
  ':' +
  ('0' + Math.floor(sec / 60)).slice(-2) +
  ':' +
  ('0' + sec % 60).slice(-2)

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStart: false,
      isPause: false,
      secCount: 0,
    }
    this.currentSec = null
    console.log('constructor')
  }

  handleStartBtn() {
    this.setState({
      isStart: true
    })
    this.currentSec = setInterval(() =>
      this.setState({
        secCount: this.state.secCount + 1
      })
      , 1000);
  }

  handleStopBtn() {
    this.setState({
      isStart: false,
      secCount: 0
    })
    clearInterval(this.currentSec)
  }

  handlePauseBtn() {
    this.setState({
      isPause: true,
    })
    clearInterval(this.currentSec)
  }

  handleResumeBtn() {
    this.setState({
      isPause: false
    })
    this.currentSec = setInterval(() =>
      this.setState({
        secCount: this.state.secCount + 1
      })
      , 1000);
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}> Home Screen!!! </Text>
          <Text style={styles.timeView}>
            {formattedTime(this.state.secCount)}
          </Text>
        </View>
        <View>
          <View style={styles.buttonView}>
            {(this.state.isStart === false) ?
              <Button style={{ marginRight: 5 }}
                title='Start'
                onPress={this.handleStartBtn.bind(this)}
              /> :
              <Button style={{ marginRight: 5 }}
                title='Stop'
                onPress={this.handleStopBtn.bind(this)}
              />}
            {(this.state.secCount === 0) ? null :
              (this.state.isPause === false) ?
                <Button
                  style={{ marginLeft: 5 }}
                  title='Pause'
                  onPress={this.handlePauseBtn.bind(this)}
                /> : <Button
                  style={{ marginLeft: 5 }}
                  title='Resume'
                  onPress={this.handleResumeBtn.bind(this)}
                />
            }

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