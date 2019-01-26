import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

class PokemonListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderdata: [],
      id: 1,
      nextLink: ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        let i
        for (i in responseJson.results) {
          this.setState({
            renderdata: [...this.state.renderdata, responseJson.results[i]],
            nextLink: responseJson.next
          })
        }
        console.log(this.state.renderdata)
        console.log(this.state.nextLink)
      })
      .catch((e) => console.log(e))
  }

  onNextPage() {
    console.log('Load trang mới')
    fetch(this.state.nextLink)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        let i
        for (i in responseJson.results) {
          this.setState({
            renderdata: [...this.state.renderdata, responseJson.results[i]],
            nextLink: responseJson.next
          })
        }
        console.log(this.state.renderdata)
      })
      .catch((e) => console.log(e))
  }

  render() {
    return (
      <FlatList
        data={this.state.renderdata}
        onEndReachedThreshold={0.1}
        onEndReached={() => this.onNextPage()}

        // Data render
        renderItem={({ item }) => (
          <TouchableOpacity style={{
            flex: 1,
            height: 100,
            borderBottomWidth: 1,
            margin: 10
          }}>
            {/* <Image
              source={{ uri: item.sprites.front_default }}
              style={{ width: 150, height: 150 }}
            /> */}
            {/* <View style={styles.textView}> */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>
              Name:
            <Text
                style={{
                  color: 'red'
                }}>
                {'   ' + item.name}
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontStyle: 'italic',
                color: '#2E64FE'
              }}
            >
              Url: {item.url}
            </Text>
            {/* </View> */}
          </TouchableOpacity>
        )}
      />
    )
  }
}

export default PokemonListScreen

const styles = StyleSheet.create({

  textView: {
    marginTop: 40
  }
})