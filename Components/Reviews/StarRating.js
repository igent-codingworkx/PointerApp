import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet} from 'react-native';
const WATER_IMAGE = require('../../screens/images/star.png')
import { Rating, } from 'react-native-ratings';

export default class StarRating extends Component {

    state ={
        ratingValue :''
    }
  ratingCompleted =( ratingValue ) => {
    console.log( `Rating is: ${ratingValue}` );
    this.setState({ratingValue:` ${ratingValue} out of 5`})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
                  <Rating
                   // type='star'
                    ratingImage={WATER_IMAGE}
                    //ratingColor="#1BCA9B"
                    //ratingBackgroundColor='white'
                    ratingCount={5}
                    imageSize={20}
                    onFinishRating={this.ratingCompleted}
                    fractions ={2}
                    style={{ paddingVertical: 10 }}
                    />
                     <Text style ={{fontFamily:'verdana',fontSize:12,letterSpacing:1}}>{this.state.ratingValue} (170 reviews)</Text>
  
   
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1
  },
  center:  {
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  
});

