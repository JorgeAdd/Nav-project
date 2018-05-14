import React, { Component } from 'react';
import {  View, Text, TouchableHighlight,StyleSheet,WebView,Platform } from 'react-native';
import {Container} from 'native-base';

import Tarjeta from './Tarjeta';

class ScreenTwo extends Component {
    static navigationOptions = {
        title: "Screen Two",
    }
  render() {
      const{state,navigate} = this.props.navigation;
    return (
        <View>
            <Tarjeta/>
            
        {/*
        <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    
                    //tgbNymZ7vqY WORKS
                    //ySoeapm4hpM VEVO
                    source={{uri: 'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0&amp;showinfo=0'}}
            />


        <TouchableHighlight onPress={() => this.props.navigation.goBack()}
            style={[styles.button, {backgroundColor: '#C56EE0'}]}>
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigate("ScreenThree",{screen:"Screen*Three"})}
            style={[styles.button, {backgroundColor: '#4286f4'}]}>
                <Text style={styles.buttonText}>Go forward</Text>
            </TouchableHighlight>*/}
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
    titleText:{
        fontSize:22
    },
    buttonContainer:{
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    button: {

        margin: 10,
        borderRadius: 20,
        height:50,
        flex:2,
        justifyContent:'center'        
    },
    buttonText:{
        color:'white',
        fontSize: 18,
        alignSelf: 'center'
    },
    WebViewContainer: {
 
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
     
      }
});

export default ScreenTwo;