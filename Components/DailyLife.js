import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Navigation } from 'react-native-navigation'
const { width, height } = Dimensions.get('window');

export default class DailyLife extends Component {
    render() {
        return (
            <View style ={{flex:1}}>

               <View style={styles.rowContainer}>
                        <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300' }}>Daily Life</Text>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("champagne")}>
                                    <Image source={require('../screens/images/PreferencesDailLife/IHaveaCarGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Car {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("cider")}>
                                    <Image source={require('../screens/images/PreferencesDailLife/IHaveChildrenGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Children {'\n'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={()=> alert("cocktails")}>
                                    <Image source={require('../screens/images/PreferencesDailLife/IHavePetsGrey.png')} style={styles.imageStyle} />
                                    <Text numberOfLines={2}
                                        style={styles.textStyle}>Pets {'\n'}</Text>
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