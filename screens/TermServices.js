import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class TermServices extends Component {
  state = {
    dataSource: []
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res1 => res1.json())
      .then(responsedata => {
        this.setState({ dataSource: responsedata })
      })
  }
  render() {
    const mydata = this.state.dataSource.map(item => {
      return <Text key={item.id}
        style={{ fontFamily: 'verdana', letterSpacing: 1 }}>{item.body}</Text>
    })
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginHorizontal: 80, flexDirection: 'row', marginTop: 20, height: 100 }}>
          <Text style={{ fontSize: 22, fontWeight: '400', paddingTop: 30, fontFamily: 'verdana' }}>Terms of Service</Text>
          <TouchableOpacity onPress={() => alert("close")}>
            <Image source={require('./images/close.png')}
              style={{ width: 18, height: 18, left: 60 }} />
          </TouchableOpacity>

        </View>
        <ScrollView>
          <View style={styles.textStyle}>
            {mydata}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    width: '90%',
    height: 'auto',
    flex: 1,
    marginTop: 50,
    marginHorizontal: 30

  }
})