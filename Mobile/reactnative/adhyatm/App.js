import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import Colors from './components/Colors.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
});

class App extends Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    const availableColors = ['red', 'green', 'yellow']

    this.state = {
      backgroundColor: 'blue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }
  render() {
    const { backgroundColor } = this.state
    return (
      <ScrollView dataSource={this.state.dataSource} renderRow = {(color)=>(
        <Colors backgroundColor={color} onSelect={this.changeColor}></Colors>)}>
      </ScrollView>
    )
  }
}
export default App;
