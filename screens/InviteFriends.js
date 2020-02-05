import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
export default class InviteFriends extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ color: '#2C3335', fontSize: 25, letterSpacing: 1, fontWeight: 'bold', paddingTop: 30 }}>Invite Friends</Text>
                    <TouchableOpacity onPress={() => alert("close")}>
                        <Image source={require('./images/close.png')}
                            style={{ width: 22, height: 22, left: 60, }} />
                    </TouchableOpacity>

                </View>
                <View style={{ width: width - 40, marginTop: 20, marginHorizontal: 10 }}>
                    <Text style={{ textAlign: 'center', letterSpacing: 1.3, fontSize: 16 }}>Love Pointer? Share the love by inviting your friends to join too.
                   </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>



                    <TouchableOpacity
                        style={styles.boxStyle}
                        onPress={() => alert("whatsapp ")}>
                        <Image source={require('./images/Share/WhatsApp.png')}
                            style={styles.imageStyle} />
                        <Text style={{ fontSize: 20, paddingLeft: 5, letterSpacing: 2 }}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxStyle}
                        onPress={() => alert("Messenger")}>
                        <Image source={require('./images/Share/Messenger.png')}
                            style={{ width: 45, height: 45, borderRadius: 100 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 5, letterSpacing: 2 }}>Messenger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxStyle}
                        onPress={() => alert("email screen")}>
                        <Image source={require('./images/Share/Email.png')}
                            style={styles.imageStyle} />
                        <Text style={{ fontSize: 20, paddingLeft: 5, letterSpacing: 2 }}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxStyle}

                        onPress={() => alert("SMS Screen")}>
                        <Image source={require('./images/Share/SMS.png')}
                            style={{ width: 45, height: 45, borderRadius: 100, }} />
                        <Text style={{ fontSize: 20, paddingLeft: 5, letterSpacing: 2 }}>SMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxStyle}
                        onPress={() => alert("copy link")}>
                        <Image source={require('./images/Share/CopyLink.png')}
                            style={styles.imageStyle} />
                        <Text style={{ fontSize: 20, paddingLeft: 5, letterSpacing: 2 }}>Copy Link</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxStyle}
                        onPress={() => alert("more")}>

                        <Text style={{ fontSize: 20, marginLeft: 40, letterSpacing: 2 }}>More..</Text>
                    </TouchableOpacity>
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
    boxStyle: {

        width: 330,
        height: 50,
        backgroundColor: '#26ae60',
        flexDirection: 'row',
        paddingLeft: 90,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 5,
        //shadowOpacity:0.5,
        opacity: 0.7


    },
    imageStyle:
    { 
        width: 45, 
        height: 45,
         borderRadius: 100, 
         }
    

})