import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')
export default class Feedback extends Component {

    state =
        {

            initialText: "Enter your Feedback",
            feebackShow: true
        }


    _handleFeedback = () => {
        this.setState({ feebackShow: !this.state.feebackShow })
    }

    onFocusChange = () => {
        this.setState({ initialText: "Submit Feedback" });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: '#2C3335', fontSize: 25, letterSpacing: 0.5, fontWeight: 'bold', paddingTop: 30 }}>How we are doing ?</Text>
                        <TouchableOpacity onPress={() => alert("close")}>
                            <Image source={require('./images/close.png')}
                                style={{ width: 18, height: 18, left: 50, }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.3, width: '90%', height: height - 790, borderColor: 'transparent', borderWidth: 1, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ fontSize: 13, letterSpacing: 1, marginLeft: 10 }}>Here at Pointer,we are continually working {"\n "}to improve our app.We Would love to hear your thoughts - what do you
                                love and what {"\n                "}could we do better?
                        </Text>
                    </View>

                    {
                        this.state.feebackShow ?
                            <View style={{ width: 300, height: 200, borderColor: '#cccc', borderWidth: 0.7, borderRadius: 10, margin: 45, padding: 10 }}>

                                <TextInput onFocus={this.onFocusChange} multiline numberOfLines={5} />


                            </View>

                            : <Text style={{ width: 230, height: 80, marginTop: 30, textAlign: 'center', marginHorizontal: 70, fontWeight: 'bold', }}>Thank you for your feedback! <Text style={{ fontWeight: '400' }}>Return to </Text> <Text style={{ color: '#1BCA9B', textDecorationLine: 'underline' }}>My Account</Text></Text>
                    }


                    <TouchableOpacity onPress={this._handleFeedback}
                        style={styles.saveButton}>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{this.state.initialText}</Text>

                    </TouchableOpacity>


                    <View style={{ width: '90%', height: 100, borderColor: 'transparent', borderWidth: 1, marginHorizontal: 30, marginTop: 20 }}>
                        <Text style={{ fontSize: 13, letterSpacing: 1, marginLeft: 10 }}>
                            {"\n         "} Unfortunately,we can't individually {"   \n"}respond to your feedback but we read all of {"\n"}your
                        comments and will do our best to {"\n             "}improve in the future.
                    </Text>
                    </View>

                    <View style={{ flex: 0.3, width: '90%', height: height - 790, borderColor: 'transparent', borderWidth: 1, marginHorizontal: 30, }}>
                        <Text style={{ fontSize: 13, letterSpacing: 1, marginLeft: 10 }}>
                            If you have a question,you can <Text style={{ color: '#1BCA9B', textDecorationLine: "underline", }}>Contact Us</Text>
                            {"\n  "}or look in our <Text style={{ color: '#1BCA9B', textDecorationLine: "underline", }}>Help</Text>section for an answer.
                    </Text>
                    </View>
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
    saveButton:
    {

        width: 250,
        height: 40,
        backgroundColor: '#019031',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.7,
        marginLeft: 60,


    }

})