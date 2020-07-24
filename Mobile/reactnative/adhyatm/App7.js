import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Colors from './components/Colors.js'
import ColorForm from './components/ColorForm.js'

class App extends Component {

    constructor() {
        super();
        this.state = {
            backgroundColor: 'blue',
            availableColors : [
                { key: 'red' },
                { key: 'green' },
                { key: 'blue' }
            ]
        }
        this.changeColor = this.changeColor.bind(this);
        this.newColor = this.newColor.bind(this);
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

    changeColor(backgroundColor) {
        this.setState({ backgroundColor });
    }
    newColor(color) {
        this.state.availableColors.push({key : color});
    }
    render() {
        const { backgroundColor } = this.state
        const { availableColors } = this.state
        return (
            <View style={styles.container, { backgroundColor }}>
                <FlatList
                    data={availableColors}
                    renderItem={({ item }) =>
                        <Colors backgroundColor={item.key} onSelect={this.changeColor}></Colors>
                    }
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={
                        <ColorForm onNewColor={this.newColor}/>
                    }
                    ListFooterComponent={
                        <View />
                    }
                    keyboardShouldPersistTaps='always'
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
    headerfooter: {
        backgroundColor: 'lightgrey',
        paddingTop: 20,
        padding: 10,
        fontSize: 30,
        textAlign: 'center'
    },
})

export default App;