import React, { Component } from 'react';
import {  View, Text, TouchableHighlight,StyleSheet,WebView,Platform } from 'react-native';
import {Container, Button} from 'native-base';

import Tarjeta from './Tarjeta';

import OneSignal from 'react-native-onesignal';

class ScreenTwo extends Component {
    static navigationOptions = {
        title: "Screen Two",
    }

    componentDidMount(){
        let playerId = "6d552a4b-3a95-4701-9866-681a003b5b2b";
        let otherParameters = null;
        let data = ["data"]
        let contents = {
            'en': 'You got notification from React-native'
        }   
       // OneSignal.postNotification(contents,data,playerId);

            OneSignal.sendTags({
              "userId": 'jdelgado@frontrunnertechnologies.net'
            });
    }
    pressing(){
        alert('k');
    }

  render() {
      const{state,navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Text>Hola</Text>
            <Button style={styles.button} onPress={this.pressing()}>
                <Text style={styles.buttonText}>Holaaaa</Text>
            </Button>
            
        
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