
import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

const { width, height } = Dimensions.get('window')

export default class Home extends Component {
    static options() {
        return {
            topBar: {
                visible: false
            }
        }
    }
    gotoScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={{ flex:1,fontWeight: 'bold', textAlign: 'center', fontSize: 20, letterSpacing: 1, marginVertical: 10 }}>BookWormSuzie</Text>

                    <View style={{ flex: 1, flexDirection: 'row', height: 160, paddingHorizontal: 15, borderBottomColor: '#ccc', borderBottomWidth: 1, }}>

                        <View style={{ flex:0.6,paddingTop:6 }}>

                        <TouchableOpacity onPress={() => alert("image upload")}>
                                <Image source={require('./images/splash.jpeg')} style={{width:120,height:110,resizeMode:'contain'}} />
                                <Text style={{ color: '#10A881', textDecorationLine: 'underline', fontSize: 13, letterSpacing: 1.5, marginTop: 8,marginLeft:13}}>Edit profile</Text>
                            </TouchableOpacity>
                            

                        </View>
                        <View style={{ flex:1, marginTop: 10, width: width - 200, height: height - 120,paddingLeft:15 }}>
                            <Text style={{ fontSize: 20, letterSpacing: 1.5, }}>About Me...</Text>
                            <Text style={{ letterSpacing: 1, paddingTop: 3,fontSize:12 }}
                                textBreakStrategy="highQuality"
                            >I love to find cosy cafes & peaceful spots in cities all over
                            the world,where I can curl up  { "\n"}with a good book and relax.
                                  </Text>
                        </View>

                    </View>


                    <View style={{ flex: 1, marginVertical: 20, }}>


                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>My Maps</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("Map")}>
                                <Image source={require('./images/pin.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>My Preferences</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("Preferences")}>
                                <Image source={require('./images/control.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Reviews</Text>
                            <TouchableOpacity onPress={() => alert("reviews")}>
                                <Image source={require('./images/star.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Notifications</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("Notification")}>
                                <Image source={require('./images/bell.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Invite Friends</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("InviteFriends")}>
                                <Image source={require('./images/friends.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>My Earnings</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("MyEarnings")}>
                                <Image source={require('./images/profit.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}> Help</Text>
                            <TouchableOpacity onPress={() => alert("help")}>
                                <Image source={require('./images/question.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Terms of Service</Text>
                            <TouchableOpacity onPress={() => alert("services")}>
                                <Image source={require('./images/accept.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Give Feedback</Text>
                            <TouchableOpacity onPress={() =>this.gotoScreen("Feedback")}>
                                <Image source={require('./images/feedback.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Log Out</Text>
                            <TouchableOpacity onPress={() => alert("LogOut")}>
                                <Image source={require('./images/logout.png')} style={{ width: 30, height: 30, }}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <Text style ={{fontSize:12,color:'#999',textAlign:'center'}}>Version 1.04</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    labels: {
        flex: 1,
        flexDirection: 'row',
        width: width,

        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5


    }
})

 