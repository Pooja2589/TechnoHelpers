import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        //fontSize: 30,
        padding: 10,
        margin: 10,
        //color: 'black',
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'stretch',
        //textAlign: 'center'
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sample: {
        height: 20,
        width: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 30,
        margin: 5
    }
})


const Colors = ({backgroundColor, onSelect=f=>f}) => (

    <TouchableHighlight style={styles.button}
        underlayColor='orange' onPress={() => onSelect(backgroundColor)}>
        <View style={styles.row}>
            <View style={[styles.sample, { backgroundColor }]}></View>
            <Text style={styles.text}>{backgroundColor}</Text>
        </View>
    </TouchableHighlight>
)

export default Colors;