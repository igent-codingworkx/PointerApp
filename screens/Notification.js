import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Switch, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class Notification extends Component {

    state = {
        switchValue: false
    }
    render() {
        return (
            <SafeAreaView style={StyleSheet.container}>
                <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ color: '#2C3335', fontSize: 22, letterSpacing: 1.3, fontWeight: '500', paddingTop: 30 }}>Notifications</Text>
                    <TouchableOpacity onPress={() => alert("close")}>
                        <Image source={require('./images/close.png')}
                            style={{ width: 20, height: 20, left: 80 }} />
                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: 20, padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', letterSpacing: 1 }}>Email Notifications</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', height: 60, borderColor: 'transparent', borderWidth: 0.5 }}>
                        <View>
                            <Text style={{ fontSize: 12, color: '#999', padding: 5, letterSpacing: 0.7 }}>Occasionally ,we'd like to email you about {"\n"}new maps that
                             you may be interested in or {"\n"} new features on the app.</Text>
                        </View>


                        <Switch style={styles.switchButton}
                            value={this.state.switchValue}
                            onValueChange={(switchValue) => this.setState({ switchValue })}>
                            <Text>{this.state.switchValue ? 'Yes' : 'No'}</Text>
                        </Switch>


                    </View>

                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', letterSpacing: 1 }}>Push Notifications</Text>

                </View>

                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', letterSpacing: 1 }}>Map Updates</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', height: 60, borderColor: 'transparent', borderWidth: 0.5 }}>
                        <View>
                            <Text style={{ fontSize: 12, color: '#999', padding: 5, letterSpacing: 0.7 }}>When a map you've saved or purchased {"\n"}
                                has been updated by the creator.</Text>
                        </View>


                        <Switch style={styles.switchButton}
                            value={this.state.switchValue}
                            onValueChange={(switchValue) => this.setState({ switchValue })}>
                            <Text>{this.state.switchValue ? 'Yes' : 'No'}</Text>
                        </Switch>


                    </View>

                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', letterSpacing: 1 }}>Permanent Closures</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 60, borderColor: 'transparent', borderWidth: 0.5 }}>
                        <View>
                            <Text style={{ fontSize: 12, color: '#999', padding: 5, letterSpacing: 0.7 }}>When a location in a map you've created {"\n"}becomes permanently closed so that you
                     {"\n"} can remove it from your map.</Text>
                        </View>


                        <Switch style={styles.switchButton}
                            value={this.state.switchValue}
                            onValueChange={(switchValue) => this.setState({ switchValue })}>
                            <Text>{this.state.switchValue ? 'Yes' : 'No'}</Text>
                        </Switch>


                    </View>

                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', letterSpacing: 1 }}>Purchases / Saves</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', height: 60, borderColor: 'transparent', borderWidth: 0.5 }}>
                        <View>
                            <Text style={{ fontSize: 12, color: '#999', padding: 5, letterSpacing: 0.7 }}>When a map you've created  has been{"\n"}purchased or saved by another user</Text>
                        </View>


                        <Switch style={styles.switchButton}
                            value={this.state.switchValue}
                            onValueChange={(switchValue) => this.setState({ switchValue })}>
                            <Text>{this.state.switchValue ? 'Yes' : 'No'}</Text>
                        </Switch>


                    </View>

                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', letterSpacing: 1 }}>Reviews</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', height: 60, borderColor: 'transparent', borderWidth: 0.5 }}>
                        <View>
                            <Text style={{ fontSize: 12, color: '#999', padding: 5, letterSpacing: 0.7 }}>When a  map you've created has received a {"\n"}review from another user.</Text>
                        </View>


                        <Switch style={styles.switchButton}
                            value={this.state.switchValue}
                            onValueChange={(switchValue) => this.setState({ switchValue })}>
                            <Text>{this.state.switchValue ? 'Yes' : 'No'}</Text>
                        </Switch>


                    </View>

                </View>

                <TouchableOpacity onPress={() => alert("save changes")}
                    style={{ width: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#019031', height: 40, marginHorizontal: 30, borderRadius: 10, marginTop: 20, opacity: 0.6 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Save  Changes</Text>
                </TouchableOpacity>
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
    switchButton:
    { 
        marginTop: 10,
         padding: 5 
        }
    
   

})