import React, { Component } from 'react'
import { Text, View ,Image,TextInput,Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')
export default class SearchScreen extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', width: '85%', height: height - 850, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginHorizontal: 20 }}>
            <Image source={require('../../screens/images/search.png')} style={{ width: 18, height: 18, top: 15 }} />
            <View style={{ margin: 12 }}>
                <TextInput style={{ fontSize: 17, }}
                    placeholder="Search by map name..">

                </TextInput>
            </View>


        </View>

        )
    }
}
