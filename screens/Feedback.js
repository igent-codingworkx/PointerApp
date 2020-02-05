import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
const { width, height } = Dimensions.get('window')
export default class Feedback extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ color: '#2C3335', fontSize: 25, letterSpacing: 0.5, fontWeight: 'bold', paddingTop: 30 }}>How we are doing ?</Text>
                    <TouchableOpacity onPress={() => alert("close")}>
                        <Image source={require('./images/close.png')}
                            style={{ width: 20, height: 20, left: 60, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: width - 100, height: height - 790, borderColor: 'transparent', borderWidth: 1, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, letterSpacing: 1, marginLeft: 10 }}>Here at Pointer,we are continually working {"\n "}to improve our app.We Would love to hear your thoughts - what do you
                            love and what {"\n                "}could we do better?
                    </Text>
                </View>

                <View style={{ width: width - 100, height: height - 740, borderColor: '#cccc', borderWidth: 0.7, borderRadius: 10, margin: 45, padding: 10 }}>
                    <TextInput multiline />
                </View>
              
                <TouchableOpacity onPress={() => alert("dataSave")}
                    style={styles.saveButton}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Enter your Feedback</Text>
                </TouchableOpacity>
                <View style={{ width: width - 95, height: height - 790, borderColor: 'transparent', borderWidth: 1, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, letterSpacing: 1, marginLeft: 10 }}>
   {"\n         "} Unfortunately,we can't individually {"   \n"}respond to your feedback but we read all of {"\n"}your 
        comments and will do our best to {"\n             "}improve in the future.
                    </Text>
                </View>
                <View style={{ width: width - 95, height: height - 790, borderColor: 'transparent', borderWidth: 1, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, letterSpacing: 1, marginLeft: 10 }}>
                    If you have a question,you can <Text style={{color:'green',textDecorationLine: "underline",}}>Contact Us</Text>
                    {"\n  "}or look in our <Text style={{color:'green',textDecorationLine: "underline",}}>Help</Text>section for an answer.
                    </Text>
                </View>
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
    saveButton:
    {   
        flex:0.4,
        backgroundColor: '#019031',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity:0.7,
       marginHorizontal:40,
       
    }

})