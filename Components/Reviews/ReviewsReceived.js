import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import StarRating from './StarRating'

const { width, height } = Dimensions.get('window')

export default class ReviewsReceived extends Component {

    state = {
        dataSource: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    dataSource: response
                })
            })

    }

    _renderItem = ({ item }) => {
        return (
          


                <View style={{ flex: 1, width: '95%', borderColor: 'transparent', borderWidth: 0.5, height: 150, marginHorizontal: 10, }}>
                    
                  
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Image source={require('../../screens/images/pin.png')} style={{ width: 22, height: 22, resizeMode: 'contain', tintColor: '#1BCA9B' }} />
                        <Text style={{ fontSize: 14, letterSpacing: 1, color: '#1BCA9B', marginHorizontal: 10 }}>{item.name}</Text>
                    </View>


                    <View style={{ flexDirection: 'row', }}>

                        <View style={{ width: 60, height: 60, borderColor: 'green', borderWidth: 1 }}>


                            <Image source={require('../../screens/images/splash.jpeg')} style={{ width: 60, height: 60, resizeMode: 'cover' }} />
                        </View>

                        <View>
                            <Text style={{ marginLeft: 14, fontFamily: 'verdana', fontSize: 12 }}>{item.name}</Text>
                            <View style={{ flex: 0.8, flexDirection: 'row', width: '100%', marginLeft: 12 }}>
                                <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                                <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                                <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                                <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                                <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                                <Text style={{ fontSize: 12, padding: 4, color: 'grey', marginHorizontal: 90 }}>19th Feb 2019</Text>
                            </View>

                        </View>


                    </View>


                    <View style={{ marginLeft: 80, width: '75%', height: 100, marginTop: -25 }}>
                        <Text style={{ fontSize: 12, letterSpacing: 1, marginLeft: 50, fontFamily: 'verdana' }}>Love this map ! Fantastic suggestions around the capital.I've tried 3 so far and really impressed by them all ! Can't wait to try more.</Text>
                    </View>

                </View>
           

        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flex:1}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <StarRating/>
                    </View>
                                    
            <View style ={{marginTop:20}}>
            <FlatList 
                  keyExtractor={(item, index) => index.toString()}
                    data={this.state.dataSource}
                    renderItem={this._renderItem} />
            
            </View>
              
            </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    reviewStyle:
    {
        width: 20,
        height: 20
    },
})