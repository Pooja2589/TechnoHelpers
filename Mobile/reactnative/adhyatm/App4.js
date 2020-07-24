import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import Colors from './components/Colors.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

class App extends Component {
  constructor() {
    super();
    const availableColors = ['red', 'green', 'yellow']

    this.state = {
      backgroundColor: 'blue',
      availableColors
    }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }
  render() {
    const { backgroundColor } = this.state
    return (
      <ScrollView style={[styles.container,{backgroundColor}]}>
        <Colors backgroundColor='red' onSelect={this.changeColor}></Colors>
        <Colors backgroundColor='blue' onSelect={this.changeColor}></Colors>
        <Colors backgroundColor='green' onSelect={this.changeColor}></Colors>
        <Colors backgroundColor='yellow' onSelect={this.changeColor}></Colors>
        <Colors backgroundColor='grey' onSelect={this.changeColor}></Colors>
        <Colors backgroundColor='black' onSelect={this.changeColor}></Colors>
        <Colors backgroundColor='pink' onSelect={this.changeColor}></Colors>
        <Colors backgroundColor='salmon' onSelect={this.changeColor}></Colors>
      </ScrollView>
    )
  }
}
export default App;
