
import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet, Alert } from 'react-native'
import { Navigation } from 'react-native-navigation'
import ImagePicker from 'react-native-image-picker';
const { width, height } = Dimensions.get('window')

export default class Home extends Component {
    state = {
        image: null
    }
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

    _logOut = () => {
        Alert.alert(
            'Log Out',
            'Are you sure you want to log out ?',
            [

                {
                    text: 'No,Cancel',

                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Yes,Please', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    }

    selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {

                let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    image: source,
                });
            }
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <Text style={{ flex: 1, fontWeight: '400', textAlign: 'center', fontSize: 20, letterSpacing: 1, marginVertical: 15,fontFamily:'verdana' }}>BookWormSuzie</Text>

                    <View style={{ flex: 1, flexDirection: 'row', height: 160, paddingHorizontal: 15, borderBottomColor: '#ccc', borderBottomWidth: 1, }}>

                        <View style={{ marginHorizontal: 20, paddingTop: 6 }}>

                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                {this.state.image === null ? (
                                    <Image source={require('./images/splash.jpeg')} style={{ width: 110, height: 100, resizeMode: 'cover' }} />
                                ) : (
                                        <Image style={styles.avatar} source={this.state.image} />
                                    )}

                                <Text style={{ color: '#10A881', textDecorationLine: 'underline', fontSize: 13, letterSpacing: 1.5, marginTop: 8, marginLeft: 13 }}>Edit profile</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={{ marginTop: 10, width:'60%', height: 120, paddingLeft: 15 }}>
                            <Text style={{ fontSize: 15, letterSpacing: 1.5, }}>About Me...</Text>
                            <Text style={{ letterSpacing: 1, paddingTop: 3, fontSize: 12 }}
                                textBreakStrategy="highQuality"
                            >I love to find cosy cafes & peaceful spots in cities all over
                            the world,where I can curl up  {"\n"}with a good book and relax.
                                  </Text>
                        </View>

                    </View>


                    <View style={{ flex: 1, marginVertical: 20, }}>


                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>My Maps</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("Map")}>
                                <Image source={require('./images/pin.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>My Preferences</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("Preferences")}>
                                <Image source={require('./images/control.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Reviews</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("ReviewScreen")}>
                                <Image source={require('./images/star.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Notifications</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("Notification")}>
                                <Image source={require('./images/bell.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Invite Friends</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("InviteFriends")}>
                                <Image source={require('./images/friends.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>My Earnings</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("MyEarnings")}>
                                <Image source={require('./images/profit.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}> Help</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("Help")}>
                                <Image source={require('./images/question.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Terms of Service</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("TermServices")}>
                                <Image source={require('./images/accept.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Give Feedback</Text>
                            <TouchableOpacity onPress={() => this.gotoScreen("Feedback")}>
                                <Image source={require('./images/feedback.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.labels}>
                            <Text style={{ fontSize: 16, letterSpacing: 1 }}>Log Out</Text>
                            <TouchableOpacity onPress={this._logOut}>
                                <Image source={require('./images/logout.png')} style={styles.imageIcons}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <Text style={{ fontSize: 12, color: '#999', textAlign: 'center' }}>Version 1.04</Text>
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


    },
    avatar: {

        width: 110,
        height: 100,
        resizeMode: 'cover'
    },

    imageIcons: { width: 25, height: 25, }

})

