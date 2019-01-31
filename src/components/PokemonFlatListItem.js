import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

import { showPokemonModalAction } from '../actions/pokemonModalAction'

import Swipeout from 'react-native-swipeout'

class PokemonFlatListItem extends Component {

  showPokemon(pokemonUrl) {
    const { showPokemonModalAction } = this.props
    console.log(pokemonUrl)
    showPokemonModalAction(pokemonUrl)
  }

  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (sectionID, rowId, direction) => {

      },
      onOpen: (sectionID, rowId, direction) => {

      },
      right: [
        {
          onPress: () => {

          },
          text: 'Delete', type: 'delete'
        },
        {
          onPress: () => {

          },
          text: 'Close'
        }
      ],
      rowId: this.props.index,
      sectionID: 1,

    }
    return (
      <Swipeout {...swipeSettings}>
        <TouchableOpacity style={{
          flex: 1,
          height: 100,
          borderBottomWidth: 0.8,
          backgroundColor: 'white'
        }}
          onPress={() => this.showPokemon(this.props.item.url)}
        >
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
              {'   ' + this.props.item.name}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontStyle: 'italic',
              color: '#2E64FE'
            }}
          >
            Url: {this.props.item.url}
          </Text>
          {/* </View> */}
        </TouchableOpacity>
      </Swipeout>
    )
  }
}

export default connect(null, {
  showPokemonModalAction
})(PokemonFlatListItem)