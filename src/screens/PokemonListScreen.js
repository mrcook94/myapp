import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  Image,
  Modal,
  Alert,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'

//import components
import PokemonInfo from '../components/PokemonInfo'
import PokemonFlatListItem from '../components/PokemonFlatListItem'

//import action
import { GetPokemonListAction } from '../actions/pokemonAction'
import {
  showPokemonModalAction,
  closeModalAction,
} from '../actions/pokemonModalAction'

import { connect } from 'react-redux'

class PokemonListScreen extends Component {

  static navigationOptions = {
    title: 'Pokemon List',
  }

  componentDidMount() {
    this.onNextPage()
  }

  //Load pokemon list function
  onNextPage() {
    const {
      GetPokemonListAction,
      pokemonUrl,
    } = this.props
    GetPokemonListAction(pokemonUrl)
  }

  // function handle press to show specified pokemon
  showPokemon(pokemonUrl) {
    const { showPokemonModalAction } = this.props
    console.log(pokemonUrl)
    showPokemonModalAction(pokemonUrl)
  }

  setModalClose() {
    const { closeModalAction } = this.props
    closeModalAction()
  }

  handleCloseModal() {
    Alert.alert(
      'Alert',
      'Do you want to close?',
      [
        { text: 'OK', onPress: () => this.setModalClose() },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        }
      ])
  }
  render() {
    const { renderData, isLoading, modalVisible, pokemonItem, isModalLoading, modalMessage } = this.props
    console.log('hihihi')
    console.log(modalVisible)
    return (
      <View>
        {/* Pokemon modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            this.handleCloseModal()
          }}>
          <View style={{ flex: 1, marginTop: 22, justifyContent: 'space-around', alignItems: 'center' }}>
            {(!isModalLoading) ? (
              <View>
                <Image
                  source={{ uri: pokemonItem.image }}
                  style={{
                    height: 200,
                    width: 200
                  }}
                />
                <PokemonInfo pokemonTitle={'NAME'} pokemonDetail={pokemonItem.name} />
                <PokemonInfo pokemonTitle={'HEIGHT'} pokemonDetail={pokemonItem.height} />
                <PokemonInfo pokemonTitle={'WEIGHT'} pokemonDetail={pokemonItem.weight} />
              </View>) : (
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#0000FF' }}>{modalMessage}</Text>)}
            <TouchableHighlight
              onPress={() => this.handleCloseModal()}
              underlayColor='#99FFCC'
            >
              <Text style={{ fontSize: 30, textAlign: 'center', color: '#FF6600' }}>Hide Modal</Text>
            </TouchableHighlight>

          </View>
        </Modal>

        {/* Pokemon List  */}
        <FlatList
          data={renderData}

          style={{ margin: 10 }}
          //refresh control
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
            />}
          onEndReached={this.onNextPage.bind(this)}
          onEndReachedThreshold={0.2}

          // View render
          renderItem={({ item, index }) => {
            return (
              // <TouchableOpacity style={{
              //   flex: 1,
              //   height: 100,
              //   borderBottomWidth: 1,
              //   margin: 10
              // }}
              //   onPress={() => this.showPokemon(item.url)}
              // >
              //   <Text
              //     style={{
              //       fontSize: 20,
              //       fontWeight: 'bold'
              //     }}>
              //     Name:
              //     <Text
              //       style={{
              //         color: 'red'
              //       }}>
              //       {'   ' + item.name}
              //     </Text>
              //   </Text>
              //   <Text
              //     style={{
              //       fontSize: 15,
              //       fontStyle: 'italic',
              //       color: '#2E64FE'
              //     }}
              //   >
              //     Url: {item.url}
              //   </Text>
              //   {/* </View> */}
              // </TouchableOpacity>
              <PokemonFlatListItem item={item} index={index} />
            )
          }
          }
        />
      </View >
    )
  }
}

function mapStatetoProps(state) {
  return {
    isLoading: state.pokemonReducer.isLoading,
    renderData: state.pokemonReducer.pokemonData,
    pokemonUrl: state.pokemonReducer.pokemonUrl,
    modalVisible: state.pokemonModalReducer.isModalVisible,
    pokemonItem: state.pokemonModalReducer.pokemonItem,
    isModalLoading: state.pokemonModalReducer.isPokemonShowing,
    modalMessage: state.pokemonModalReducer.message,
  }
}

export default connect(mapStatetoProps, {
  GetPokemonListAction,
  showPokemonModalAction,
  closeModalAction
})(PokemonListScreen)

const styles = StyleSheet.create({

  textView: {
    marginTop: 40
  }
})