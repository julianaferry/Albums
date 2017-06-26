
 //import library
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


//extends, renders, return it to the device - nesting
export default class EncontraFluxo extends Component {
  render() {
    return (


// create Component
const header = (props) => {
  const{textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
    <Text Style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },

  textStyle: {
    fontSize: 20,
    padding: 15,
    alighItems:'center',
    justifyContent:'center',
    height: 60,
    shadowColor:'#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position:'relative'
  },
};

//render it to the device
AppRegistry.registerComponent('EncontraFluxo', () => EncontraFluxo);
