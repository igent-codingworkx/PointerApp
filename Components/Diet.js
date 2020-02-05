import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Navigation } from 'react-native-navigation'
const { width, height } = Dimensions.get('window')

export default class Diet extends Component {
    render() {
        return (
            <View style ={{flex:1}}>
                {/* Diet Preferences */}


         <View style={styles.rowContainer}>
                        <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300'}}>Diet</Text>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity  onPress={()=> alert("dairy")}>
                                    <Image source={require('../screens/images/PreferencesDiet/DairyGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Dairy {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("egg")}>
                                    <Image source={require('../screens/images/PreferencesDiet/EggFreeGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Egg{'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("gluten")}>
                                    <Image source={require('../screens/images/PreferencesDiet/GlutenFreeGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Gluten {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Protein")} >
                                    <Image source={require('../screens/images/PreferencesDiet/HighProteinGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>High {'\n'}Protein</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("keto")}>
                                    <Image source={require('../screens/images/PreferencesDiet/KetoGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Keto {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("nut")}>
                                    <Image source={require('../screens/images/PreferencesDiet/NutFreeGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Nut {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Paleo")}>
                                    <Image source={require('../screens/images/PreferencesDiet/PaleoGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Paleo {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("pescatarian")}>
                                    <Image source={require('../screens/images/PreferencesDiet/PescatarianGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Pescatarian {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("raw")}>
                                    <Image source={require('../screens/images/PreferencesDiet/RawGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Raw {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Vegan")} >
                                    <Image source={require('../screens/images/PreferencesDiet/VeganGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Vegan {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Vegatarian")}>
                                    <Image source={require('../screens/images/PreferencesDiet/VegetarianGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Vegetarian {'\n'}</Text>
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