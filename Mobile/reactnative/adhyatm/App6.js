import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Alert } from 'react-native';

class App extends Component {

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    //handling onPress action  
    getListViewItem = (item) => {
        Alert.alert(item.key);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                        { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                        { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                        { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
                        { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
                        { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
                        { key: 'Rails' }, { key: '.Net' }
                    ]}
                    renderItem={({ item }) =>
                        <Text style={styles.item}
                            onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


export default App;