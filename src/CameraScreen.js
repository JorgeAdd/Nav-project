import React, { Component } from 'react';
import {  View, Text,TouchableHighlight,CameraRoll,StyleSheet } from 'react-native';
import {Button} from 'native-base';

import ViewPhotos from './ViewPhotos';

class CameraScreen extends Component {
    state = {
        showPhotoGallery: false,
        photoArray: []
      }

  render() {
      if(this.state.showPhotoGallery){
          return(
              <ViewPhotos
              photoArray={this.state.photoArray}/>
          )
      }
    return (
        <View>
          
          <TouchableHighlight onPress={() => this.getPhotosFromGallery()} style={styles.button}>
                <Text style={styles.buttonText } > Add Image </Text>
            </TouchableHighlight>
        </View>
    );
  }
  getPhotosFromGallery(){
     CameraRoll.getPhotos({first:1000})
      .then(res => {
          let photoArray = res.edges;
          this.setState({showPhotoGallery:true,photoArray:photoArray});
        console.log(res," images data");
      })
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
        marginBottom: 10,
        borderRadius: 5,
        height:40,
        justifyContent:'center',
        backgroundColor:'#f47a42'
    },
    buttonText:{
        color:'white',
        fontSize: 22,
        alignSelf: 'center'
    }
});
export default CameraScreen;