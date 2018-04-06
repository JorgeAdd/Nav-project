import React, { Component } from 'react';
import {  View, Text,StyleSheet, TouchableHighlight,Animated } from 'react-native';
import FadeView from './FadeView';
 import CameraScreen from './CameraScreen';



class ScreenThree extends Component {
    static navigationOptions = {
        title: "Screen Three"
    }

  render() {
      const {navigate} = this.props.navigation;
    return (
      

      <View style={ style=styles.container }>
      <CameraScreen/>
        <FadeView style={{width: 300, height: 50}}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText } >Return </Text>
            </TouchableHighlight>
        </FadeView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        height:40,
        justifyContent:'center',
        backgroundColor:'#337c5a'
    },
    buttonText:{
        color:'white',
        fontSize: 22,
        alignSelf: 'center'
    }
});

export default ScreenThree;