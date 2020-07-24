import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Colors from './components/Colors.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    paddingTop: 20
  },
  button:{
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  row: {
    flexDirection:'row',
    alignItems: 'center'
  },
  sample:{
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white'
  },
  text:{
    fontSize: 30,
    margin: 5
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
        <TouchableHighlight style={styles.button} onPress={()=>this.changeColor('yellow')}
         underlayColor='orange'>
        <View style={styles.row}>
          <View style={[styles.sample,{backgroundColor: 'yellow'}]}></View>
            <Text style={styles.text}>yellow</Text>
        </View>
        </TouchableHighlight>
      </View>
    )
  }
}
export default App;
