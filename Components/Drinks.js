import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Navigation } from 'react-native-navigation'
const { width, height } = Dimensions.get('window')


export default class Drinks extends Component {
    render() {
        return (
            <View style ={{flex:1}}>
             <View style={styles.rowContainer}>
                        <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300' }}>Drinks</Text>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("champagne")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/ChampagneGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Champagne {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("cider")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/CiderGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Cider {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("cocktails")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/CocktailsGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Cocktails {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("coffee")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/CoffeeGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Coffee{'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("bear")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/CraftBeerGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Craft {'\n'}Bear</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Gin")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/GinGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Gin {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("NonAlcohilic")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/NonAlcoholicGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>NonAlcoholic {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Prosecco")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/ProseccoGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Prosecco {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Rum")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/RumGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Rum {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Tea")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/TeaGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Tea {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("tequila")} >
                                    <Image source={require('../screens/images/PreferencesDrinks/TequilaGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Tequila {'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Vodka")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/VodkaGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Vodka{'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("whisky")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/WhiskyGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Whisky{'\n'}Free</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("Wine")}>
                                    <Image source={require('../screens/images/PreferencesDrinks/WineGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Wine{'\n'}Free</Text>
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