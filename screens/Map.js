import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')
import { Navigation } from 'react-native-navigation'
export default class MyEarnings extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(response => response.json())
            .then((res2) => {
                console.log(res2)
                this.setState({ dataSource: res2 })
            })

    }
    gotoScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }
    _renderItem = ({ item }) => {

        return (
            <View style={{ flex:1 }}>
                    <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        style={styles.buttonContainer} onPress={() => alert("dynamic maps")}>
                        <Image source={require('./images/map.jpeg')} style={styles.imageStyle} />
                        <Text numberOfLines={2}
                            style={styles.textStyle}>{item.name}</Text>


                        <View style={{ flexDirection: 'row', }}>
                            <Image source={require('./images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Image source={require('./images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Image source={require('./images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Image source={require('./images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Image source={require('./images/Map/ReviewStarFull.png')} style={styles.reviewStyle} />
                            <Text style={{ fontSize: 11, padding: 4, color: '#999' }}>84 reviewes</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image source={require('./images/pin.png')} style={styles.reviewStyle} />
                            <Image source={require('./images/pin.png')} style={styles.reviewStyle} />

                            <Text style={{ fontSize: 11, padding: 4, color: '#999' }}>21 pointers</Text>
                        </View>




                        <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 20,justifyContent:'space-around' }}>


                            <View style={styles.reviewButtonStyles}>
                                <TouchableOpacity onPress={() => this.gotoScreen("MapView")}>
                                    <Text style={{ fontSize: 12, textDecorationLine: 'underline', letterSpacing: 1 }}>View</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.reviewButtonStyles}>
                                <TouchableOpacity onPress={() => this.gotoScreen("MapEdit")}>
                                    <Text style={{ fontSize: 12, textDecorationLine: 'underline', letterSpacing: 1 }}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: 50, height: 20, justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => this.gotoScreen("MapDelete")}>
                                    <Text style={{ fontSize: 12, textDecorationLine: 'underline', letterSpacing: 1 }}>Delete</Text>
                                </TouchableOpacity>
                            </View>



                        </View>


                    </TouchableOpacity>
                </ScrollView>
            </View>


        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ flex: 1, width: '100%', height: height - 800, borderColor: 'transparent', borderWidth: 1, marginTop: 15 }}>
                        <Text style={{ marginVertical: 10, marginLeft: 20, letterSpacing: 1, fontWeight: '600' }}>Created by You</Text>

                        <View style={{ flexDirection: 'row', width: '85%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginHorizontal: 20 }}>
                            <Image source={require('./images/search.png')} style={{ width: 18, height: 18, top: 15 }} />
                            <View style={{ margin: 12,height:30  }}>
                                <TextInput style={{ fontSize: 17, }}
                                    placeholder="Search by map name..">

                                </TextInput>
                            </View>


                        </View>

                    </View>

                    <View style={{ borderColor: 'transparent', borderWidth: 1, width: '100%', }}>


                        <FlatList horizontal={true}
                            data={this.state.dataSource}
                            renderItem={this._renderItem}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                    <View style={{ width: '95%', borderBottomWidth: 0.5, borderBottomColor: '#ccc', marginHorizontal: 10,marginVertical:10 }}></View>

                    <View style={{ width: '100%', height: height - 800, borderColor: 'transparent', borderWidth: 1, marginTop: 15 }}>
                        <Text style={{ marginVertical: 10, marginLeft: 20, letterSpacing: 1, fontWeight: '600' }}>Saved or Purchased</Text>

                        <View style={{ flexDirection: 'row', width: '85%', height: height - 850, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginHorizontal: 20 }}>
                            <Image source={require('./images/search.png')} style={{ width: 18, height: 18, top: 15 }} />
                            <View style={{ margin: 12,}}>
                                <TextInput style={{ fontSize: 17, }}
                                    placeholder="Search by map name..">

                                </TextInput>
                            </View>


                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textStyle:
    {
        fontSize: 12,
        paddingTop: 5,
        letterSpacing: 1, marginLeft: 3
    },
    imageStyle:
    {
        marginTop: 10,
        width: 152,
        height: 152,
        borderWidth: 1,
        borderColor: 'transparent'
    },

    buttonContainer: {
        flex:1,
        marginTop: 5,
        height: 280,
        marginHorizontal: 10,
        borderColor: 'transparent',
        borderWidth: 1
    },

    reviewStyle:
    {
        width: 20,
        height: 20,
        //borderColor:'blue',
        
    },
    reviewButtonStyles:
    {
        flex:1,
       justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'grey',
        borderRightWidth: 0.5,
        marginHorizontal:2,
       
    }


})