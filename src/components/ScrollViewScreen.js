import React from 'react'
import { ScrollView } from 'react-native'

class ScrollViewScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
      </ScrollView>
    )
  }
}