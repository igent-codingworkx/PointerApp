import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Navigation } from 'react-native-navigation'
const { width, height } = Dimensions.get('window')


export default class Cuisines extends Component {
    render() {
        return (
            <View style ={{flex:1}}>
                {/* Cuisines Preferences */}



                <View style={styles.rowContainer}>
                        <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300' }}>Cuisines</Text>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("tea")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/AfternoonTeaGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Afternoon  {' \n    '}Tea</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("american")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/AmericanGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>American {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Barbeque")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/BarbequeGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Barbeque {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("british")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/BritishGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>British{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("brunch")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/BrunchGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Brunch{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("caribbean")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/CaribbeanGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Caribbean {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Greek")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/GreekGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Greek {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Healthy")} >
                                    <Image source={require('../screens/images/PreferencesCuisines/HealthyGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Healthy {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("indian")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/IndianGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Indian {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Italian")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/ItalianGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Italian {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("japaese")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/JapaneseGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Japanese{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("lebanese")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/LebaneseGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Lebanese{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("mexican")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/MexicanGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Mexican{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("spanish")} >
                                    <Image source={require('../screens/images/PreferencesCuisines/SpanishGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Spanish{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Thai")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/ThaiGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Thai{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Turkish")}>
                                    <Image source={require('../screens/images/PreferencesCuisines/TurkishGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Turkish{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Vietnam")} >
                                    <Image source={require('../screens/images/PreferencesCuisines/VietnameseGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Vietnamese{'\n'}</Text>
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