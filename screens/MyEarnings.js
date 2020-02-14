import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')
export default class MyEarnings extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(response => response.json())
            .then((res2) => {
                console.log(res2)
                this.setState({ dataSource: res2 })
            })

    }
    _renderItem = ({ item }) => {

        return (
            <View style={{ flex: 1 }}>


                <View style={styles.rowContainer}>

                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity
                            style={styles.buttonContainer} onPress={() => alert("dynamic maps")}>
                            <Image source={require('./images/map.jpeg')} style={styles.imageStyle} />
                            <Text numberOfLines={2}
                                style={styles.textStyle}>{item.name}</Text>
                            <Text numberOfLines={2}
                                style={{ fontSize: 15, padding: 5, fontWeight: '500' }}>Free</Text>
                            <View style={{ marginVertical: 3, padding: 6 }}>
                                <Text style={{ fontSize: 12, letterSpacing: 1 }}>You've made ..</Text>
                                <Text style={{ color: 'green', paddingTop: 5 }}>$0</Text>
                                <Text style={{ fontSize: 12, letterSpacing: 1 }}>from 81 saves</Text>
                            </View>


                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>

        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>


                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: '#2C3335', fontSize: 25, letterSpacing: 1, fontWeight: 'bold', paddingTop: 30 }}>Your Earnings</Text>
                        <TouchableOpacity onPress={() => alert("close")}>
                            <Image source={require('./images/close.png')}
                                style={{ width: 22, height: 22, left: 60, }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: height - 800, borderColor: 'transparent', borderWidth: 1, marginTop: 15 }}>
                        <Text style={{ marginVertical: 10, marginLeft: 20, letterSpacing: 1 }}>Your Maps</Text>

                        <View style={{ flexDirection: 'row', width: '90%', height: height - 850, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginHorizontal: 20 }}>
                            <Image source={require('./images/search.png')} style={{ width: 18, height: 18, top: 15 }} />
                            <View style={{ margin: 12 }}>
                                <TextInput style={{ fontSize: 17, }}
                                    placeholder="Search by map name..">

                                </TextInput>
                            </View>


                        </View>

                    </View>

                    <View style={{ width: '100%', height: 'auto' }}>


                        <FlatList horizontal={true}
                            data={this.state.dataSource}
                            renderItem={this._renderItem}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 20, letterSpacing: 1.5, }}>Total Earned: $</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 20, letterSpacing: 1.5 }}>Current Balance: $</Text>
                    </View>
                    <TouchableOpacity onPress={() => alert("dataSave")}
                        style={styles.saveButton}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Withdraw $8.90</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textStyle:
    {
        fontSize: 14,
        paddingTop: 5,
        letterSpacing: 1, marginLeft: 3
    },
    imageStyle:
    {
        marginTop: 10,
        width: 152,
        height: 152,
        borderWidth: 1,
        borderColor: 'transparent'
    },

    buttonContainer: {
        flex: 1,
        marginTop: 5,

        borderWidth: 0.5,
        borderColor: 'transparent',
        marginHorizontal: 10,
    },
    saveButton:
    {
        flex: 0.3,
        width: 300,
        height: 40,
        backgroundColor: '#019031',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.7,
        marginHorizontal: 50,
        marginTop: 30
    }

})