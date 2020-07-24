import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

export default class ColorForm extends Component{
    constructor(){
        super()
        this.state = {
            textColor: ''
        }
        this.submit = this.submit.bind(this)
    }
    submit(){
        Keyboard.dismiss()
        this.props.onNewColor(this.state.textColor.toLowerCase())
        this.setState({textColor:''})
    }
    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="Enter a color..."
                onChangeText={(textColor)=> this.setState({textColor})} 
                value={this.state.textColor}></TextInput>
                <Text style={styles.button} onPress={this.submit}>Add</Text>
            </View>
        )
    }
}

ColorForm.propTypes = {
    onNewColor: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        height: 50,
        justifyContent: "space-around",
        paddingTop: 20,
        height: 70,
    },
    textInput:{
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    button:{
        backgroundColor: 'darkblue',
        padding: 5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20

    }

})