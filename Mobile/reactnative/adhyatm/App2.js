import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Colors from './components/Colors.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  button:{
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'

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
      <View style={[styles.container,{backgroundColor}]}>
        <Text style={styles.button} onPress={()=> this.changeColor('green')}>green</Text>
        <Text style={styles.button} onPress={()=> this.changeColor('red')}>red</Text>
      </View>
    )
  }
}
export default App;
