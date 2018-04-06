import React, { Component } from 'react';
import {  View, Text, TouchableHighlight,StyleSheet } from 'react-native';
import {Container} from 'native-base';

class ScreenTwo extends Component {
    static navigationOptions = {
        title: "Screen Two",
    }
  render() {
      const{state,navigate} = this.props.navigation;
    return (
      <Container style={styles.container}>
        <View style={styles.buttonContainer}>
        
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}
            style={[styles.button, {backgroundColor: '#C56EE0'}]}>
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigate("ScreenThree",{screen:"Screen*Three"})}
            style={[styles.button, {backgroundColor: '#4286f4'}]}>
                <Text style={styles.buttonText}>Go forward</Text>
            </TouchableHighlight>
            
        </View>
      </Container>
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
        flexDirection: 'row',
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
    }
});

export default ScreenTwo;