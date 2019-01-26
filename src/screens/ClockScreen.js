import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { CountingUp, CountingDown } from '../actions/counterAction'

class ClockScreen extends Component {

  handleCountUp() {
    this.props.dispatch(CountingUp('Tăng'))
  }

  handleCountDown() {
    this.props.dispatch(CountingDown('Giảm'))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counters}> {this.props.counter} </Text>
        <Text style={styles.textStatus}> {this.props.text} </Text>
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            onPress={this.handleCountUp.bind(this)}
          >
            <Text style={styles.actions}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleCountDown.bind(this)}
          >
            <Text style={styles.actions}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStatetoProps(state) {
  return {
    counter: state.countNumber,
    text: state.textInput
  }
}
export default connect(mapStatetoProps)(ClockScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counters: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
  },
  textStatus: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
    color: 'blue'
  },
  actions: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
    color: 'red'
  }
})
