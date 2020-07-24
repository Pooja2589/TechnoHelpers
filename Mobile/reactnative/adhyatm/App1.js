import React from 'react';

import { StatusBar, View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';

import iconappspy from './assets/favicon.png';
import iconzipkin from './assets/23138_Zipkin_Architecture-.jpeg';

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        flex: 1,
        //backgroundColor: '#DDD',
        //alignItems: 'flex-start',
        //justifyContent: 'space-around'
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    defaultText: {
        //flex: 1,
        //textAlign: 'center',
        fontSize: 22,
        padding: 10,
        margin: 5,
        color: 'black',
        borderWidth: StyleSheet.hairlineWidth
    },
    selectedText: {
        //flex: 2,
        backgroundColor: 'yellow',
        color: 'blue',
        fontWeight: 'bold'
    },
    pic: {
        flex: 1,
        width: Dimensions.get('window').width,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    userName: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        fontSize: 30,
        color: 'white',
        padding: 10
    }

});

class App1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}></StatusBar>
                <Text style={styles.defaultText}>Nikhil</Text>
                <Text style={[styles.defaultText, styles.selectedText]}>Govind</Text>
                <Text style={styles.defaultText}>Jha</Text>
                <ImageBackground style={styles.pic} source={iconappspy}>
                    <Text style={styles.userName}>AppSpy</Text>
                </ImageBackground>
                <Image style={styles.pic} source={iconzipkin} />
            </View>
        )
    }
}

export default App1;