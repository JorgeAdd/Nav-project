import React, { Component } from 'react';
import {  View,Image,Alert } from 'react-native';
import { Button,Text, Container,Icon, Item } from 'native-base';

import PushNotif from 'react-native-push-notification';


export default class Tarjeta extends Component {

    constructor(props){
        super(props);
		this.handleNotification = this.handleNotification.bind(this);
        this.state={
            likesVar:0,
        }
    }

    handleNotification(notification) {
        console.log(this.state.likesVar);
      }

    componentDidMount=()=>{
        PushNotif.configure({
            onNotification: function(notification){
                this.handleNotification.bind(this);
            }.bind(this),
        });
    }

    createPushNotification=()=>{
        console.log('Notif creada');
        PushNotif.localNotification({
            message:'tu foto tiene '+(this.state.likesVar+1)+' likes'
        });
    }
    /*
    createPushNotification = () => {
        console.log(this.state.likesVar+'Likes pressed')
    
        PushNotification.localNotification({
          title:'NavProject',
          ticker:'ticker',
          message: "Tu foto tiene "+this.state.likesVar+" likes",
          color:'blue'
          
        });                      NOTIFICACION DESPUÉS DE 5 SEGUNDOS
        PushNotification.localNotificationSchedule({
          message: "My Notification Message", // (required)
          date: new Date(Date.now() + (5 * 1000))
        });
      }*/

    like(){
        this.setState({
            likesVar:this.state.likesVar+1})
        
        console.log('likes '+(this.state.likesVar));
        this.createPushNotification();
        // Alert.alert((this.state.likesVar+1)+' likes');
    }

    render() {
        const zeroLikes= <Text>like</Text> 
        const noZeroLikes= <Text>{this.state.likesVar} likes</Text> 
        {console.log('likes inside '+(this.state.likesVar))}
    return (
    <View>
        {/*<Header>
          <Body>
            <Title>Demo App</Title>
          </Body>
        </Header>
        <Card>
            <CardItem header>*/}
            <Text style={{fontSize:20,color:'#555555',alignSelf:'center',marginTop:5}}>React Native</Text>
            
            <Image
                style={{width: 400,height: 150,marginLeft:6}}
                source={require('../src/reactNativeImage.png')}
        />
            <Container style={{flex:1,flexDirection:'row'}}>
                <Button transparent onPress={()=>this.like()}>

                        {this.state.likesVar == 0 ? zeroLikes : noZeroLikes}
                    
                </Button>
                <Button transparent >
                    <Text>144 Comments</Text>
                </Button>
                
                <Button transparent >
                    <Text>share</Text>
                </Button>
               
            </Container>
            
      </View>
    );
  }
}