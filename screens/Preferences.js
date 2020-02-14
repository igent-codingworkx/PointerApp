import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
const { width, height } = Dimensions.get('window')
import Diet from '../Components/Diet'
import Cuisines from '../Components/Cuisines'
import Drinks from '../Components/Drinks'
import Budget from '../Components/Budget'
import Sports from '../Components/Sports'
import Travel from '../Components/Travel'
import Interests from '../Components/Interests'
import DailyLife from '../Components/DailyLife'


export default class Preferences extends Component {

    
    render() {
        return (

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: '#2C3335', fontSize: 25, letterSpacing: 1, fontWeight: 'bold', paddingTop: 30 }}>Your Preferences</Text>
                        <TouchableOpacity onPress={()=> alert("close")}>
                            <Image source={require('./images/close.png')}
                                style={{ width: 22, height: 22, left: 60 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ width: width - 20, marginTop: 20, marginHorizontal: 10 }}>
                        <Text style={{ textAlign: 'center', letterSpacing: 1.3, fontSize: 13 }}>Scroll through the icons and tap to select your Preferences
                                so that we can show you the maps you'll  be most interested in.
                   </Text>
                    </View>

                            <Diet/>

                            <Cuisines/>

                            <Drinks/>

                            <Budget/>

                             <Sports/>

                            <Travel/>

                             <Interests/>
                   

                             <DailyLife/>

                    

                          <TouchableOpacity onPress={()=> alert("dataSave")}
                                    style={styles.saveButton}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Save</Text>
                             </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
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
        width:'80%',
        height:50,
        backgroundColor: '#019031',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.7,
        marginLeft: 35,
        marginTop: 15
    }

})