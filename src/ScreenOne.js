import React, { Component } from 'react';
import {  View, Text,StyleSheet, TouchableHighlight,TouchableOpacity,DrawerLayoutAndroid } from 'react-native';
import { Header,Button,Icon } from 'native-base';

import {StackNavigator} from 'react-navigation';

import FadeView from './FadeView';

class ScreenOne extends Component {

    constructor() {
        super();
        this.openDrawerVar = this.openDrawer.bind(this);
        this.closeDrawerVar = this.closeDrawer.bind(this);
        this.state={
            abierto:false,
        }
    }

    

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return{
            title: "Welcome to StackNavigator",
            headerLeft:
            <TouchableOpacity onPress={()=>params.handleRemove()}>
                <Icon ios='ios-menu' android='md-menu' style={{marginLeft:5}}/>
            </TouchableOpacity>
        }
    };
    componentDidMount(){
        this.props.navigation.setParams({handleRemove:this.openDrawerVar});
    }
    
    _alertaaa=()=>{
        alert('Alerta activa');
    }
    openDrawer() {
        console.log('Drawer in');
            this.drawer.openDrawer();
    }
    closeDrawer() {
        console.log('Drawer out');
        this.drawer.closeDrawer();
        
    }

  render() {
      var navigationView=(
          <View style={styles.containerMenu}>
            <TouchableHighlight onPress={() => navigate("ScreenOne",{screen: "Screen*One"})}
            style={styles.textMenu}>
                <Text style={styles.textInside}> Screen One </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate("ScreenTwo",{screen: "Screen*Two"})}
            style={styles.textMenu}>
                <Text style={styles.textInside}> Screen Two </Text>
            </TouchableHighlight>
            <FadeView>
            <TouchableHighlight onPress={() => navigate("ScreenThree",{screen: "Screen*Three"})}
            style={styles.textMenu}>
                <Text style={styles.textInside}> Screen Three </Text>
            </TouchableHighlight>
            </FadeView>
          </View>
      );

      const {navigate} = this.props.navigation;
      
    return (
        <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(_drawer) => this.drawer = _drawer}      
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={()=>navigationView}
        drawerBackgroundColor="rgba(0,0,0,0.5)">

            <View style={styles.container}>
                <TouchableHighlight onPress={() => navigate("ScreenTwo",{screen: "Screen*Two"})} style={styles.button}>

                    <Text style={styles.buttonText } > Screen One </Text>
                </TouchableHighlight>
                <FadeView>
                <TouchableHighlight onPress={this.openDrawerVar} style={styles.button2}>

                    <Text style={styles.buttonText } > Menu </Text>
                </TouchableHighlight>
                </FadeView>
            </View>
        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    containerMenu:{
        flex: 1,
        backgroundColor:'#fff',
    },
    textMenu:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        height:40,
        backgroundColor:'#9fa8b7'
    },
    textInside:{
        fontSize:22,
        color:'black'
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        height:40,
        justifyContent:'center',
        backgroundColor:'#3F51B5'
    },
    button2: {
        alignSelf: 'center',
        marginLeft: 10,
        marginTop: 20,
        borderRadius:8,
        marginRight: 10,
        height:40,
        justifyContent:'center',
        backgroundColor:'#0e326d'
    },
    buttonText:{
        color:'white',
        fontSize: 22,
        alignSelf: 'center'
    }
});

export default ScreenOne;