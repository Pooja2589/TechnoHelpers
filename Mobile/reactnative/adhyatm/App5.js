import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';

import Colors from './components/Colors.js'

class App extends Component {

    constructor() {
        super();
        this.state = {
            backgroundColor: 'blue'
        }
        this.changeColor = this.changeColor.bind(this);
    }

    renderSeparator = () => {
        return (
            <View style={{
                height: 1,
                width: "100%",
                backgroundColor: "#000",
            }} />
        );
    };
    //handling onPress action  
    getListViewItem = (item) => {
        this.setState(item.key);
    }

    changeColor(backgroundColor) {
        this.setState({ backgroundColor });
    }

    render() {
        const { backgroundColor } = this.state
        return (
            <View style={styles.container,{backgroundColor}}>
                <FlatList
                    data={[
                        { key: 'red' },
                        { key: 'green' },
                        { key: 'blue' },
                        { key: 'pink' },
                        { key: 'grey' },
                        { key: 'black' },
                        { key: 'white' },
                    ]}
                    renderItem={({ item }) =>
                        <Colors backgroundColor={item.key} onSelect={this.changeColor}></Colors>
                        }
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={
                        <Text style={styles.headerfooter}> Color List </Text>
                    }
                    ListFooterComponent={
                        <Text style={styles.headerfooter}> FlatList Footer </Text>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    headerfooter:{
        backgroundColor: 'lightgrey',
        paddingTop: 20,
        padding: 10,
        fontSize: 30,
        textAlign: 'center'
    },
})


export default App;