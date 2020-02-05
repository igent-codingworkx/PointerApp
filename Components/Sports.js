import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Navigation } from 'react-native-navigation'
const { width, height } = Dimensions.get('window')

export default class Sports extends Component {
    render() {
        return (
            <View style ={{flex:1}}>
               <View style={styles.rowContainer}>
                        <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300' }}>Sports</Text>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("champagne")}>
                                    <Image source={require('../screens/images/PreferencesSports/ArcheryGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Archery {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("cider")}>
                                    <Image source={require('../screens/images/PreferencesSports/AthleticsGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Athletics {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("cocktails")}>
                                    <Image source={require('../screens/images/PreferencesSports/BadmintonGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Badminton {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("coffee")}>
                                    <Image source={require('../screens/images/PreferencesSports/BaseballGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Baseball{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("bear")}>
                                    <Image source={require('../screens/images/PreferencesSports/BasketballGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Basketball{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Gin")}>
                                    <Image source={require('../screens/images/PreferencesSports/BoxingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Boxing {'\n'}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("NonAlcohilic")}>
                                    <Image source={require('../screens/images/PreferencesSports/CricketGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Cricket{'\n'}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Prosecco")}>
                                    <Image source={require('../screens/images/PreferencesSports/CyclingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Cycling{'\n'}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Rum")}>
                                    <Image source={require('../screens/images/PreferencesSports/DancingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Dancing {'\n'}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Tea")}>
                                    <Image source={require('../screens/images/PreferencesSports/FootballGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Football{'\n'}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("tequila")} >
                                    <Image source={require('../screens/images/PreferencesSports/GolfGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Golf {'\n'}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Vodka")}>
                                    <Image source={require('../screens/images/PreferencesSports/GymGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Gym{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("whisky")}>
                                    <Image source={require('../screens/images/PreferencesSports/GymnasticsGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Gymnastics{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/HIITGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>HIIT{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/HikingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Hiking{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/HockeyGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Hockey{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/HorseRidingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>HorseRiding{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/IceHockeyGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>IceHockey{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/NetballGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Netball{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/PaddleboardingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Paddleboarding{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/PilatesGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Pilates{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/RowingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Rowing{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/RugbyGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Rugby{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/RunningGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Running{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/SnookerGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Snooker{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/SpinningGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Spinning{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/SquashGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Squash{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/SurfingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Surfing{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/SwimmingGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Swimming{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/TableTennisGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>TableTennis{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/TennisGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Tennis{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/TriathlonGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Triathlon{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/VolleyballGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Volleyball{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesSports/YogaGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Yoga{'\n'}</Text>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>


                    </View>
                    



 







            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height
    },
    rowContainer:
    {
        width:'100%',
        height:180,
        padding: 10,
        marginHorizontal: 15,
        borderBottomColor: 'orange',
        borderBottomWidth: 5,

    },
    buttonContainer: {
        marginTop: 7,
        width:110,
        height:110,
        justifyContent:'center',
        padding:5,
        
        marginHorizontal:2
    },
    textStyle:
    {
        color: '#999',
        paddingTop: 20,
        letterSpacing: 1, marginLeft: 5
    },
    imageStyle:
    {
        width: 50,
        height: 50
    },
    saveButton:
    {
        width: width - 80,
        height: height - 840,
        backgroundColor: '#019031',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.7,
        marginLeft: 35,
        marginTop: 15
    }

})