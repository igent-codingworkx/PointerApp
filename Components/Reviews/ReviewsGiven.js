import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView ,YellowBox} from 'react-native'
const { width, height } = Dimensions.get('window')

 YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested', // TODO: Remove when fixed
    ])
    
export default class ReviewsGiven extends Component {
   
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
          


                <View style={{ flex: 1, borderColor: 'transparent', borderWidth: 0.5, marginHorizontal: 10, }}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Image source={require('../../screens/images/pin.png')} style={{ width: 22, height: 22, resizeMode: 'contain', tintColor: '#1BCA9B' }} />
                        <Text style={{ fontSize: 15, letterSpacing: 1.5, color: '#1BCA9B', marginHorizontal: 10 }}>{item.name}</Text>
                    </View>
                    <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 0.2, flexDirection: 'row' }}>
                            <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Image source={require('../../screens/images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Text style={{ fontSize: 12, padding: 4, color: 'grey', marginLeft: 15 }}>19th Feb 2019</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 13, letterSpacing: 1, marginHorizontal: 10, fontFamily: 'verdana' }}>Love this map ! Fantastic suggestions around the capital.I've tried 3 so far and really impressed by them all ! Can't wait to try more.</Text>
                </View>
   

        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style ={{flex:1}}>

              
             <Text style ={{fontSize:15,fontFamily:'verdana',fontWeight:'300',textAlign:'center',letterSpacing:1,paddingVertical:10}}>12 reviews</Text>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.dataSource}
                    renderItem={this._renderItem} />
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