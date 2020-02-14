import React, { Component } from 'react'
import { Text, View } from 'react-native'
import StarRating from '../Reviews/StarRating'

export default class MapView extends Component {
    static options() {
        return { 
            topBar:{
                background: {
                    color: '#4C4B4B',
                  
                  },
                  component:{
                        name:'SearchScreen'
                  }
            }
            
        }
    }
    render() {
        return (
            <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> MapView </Text>
                {/* <SearchScreen/> */}

        <StarRating/>
            </View>
        )
    }
}
