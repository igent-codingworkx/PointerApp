import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput,FlatList } from 'react-native'
import { Navigation } from 'react-native-navigation'
const { width, height } = Dimensions.get('window')


export default class Cuisines extends Component {
    constructor(props) {
        super(props)
        this.state = {
          loading: false,
          dataSource: [
                        {
                            id:1,
                            name:"Afternoon  Tea",
                            image:require('../screens/images/PreferencesCuisines/AfternoonTeaGrey.png')
                        },
                        {
                            id:2,
                            name:"American",
                            image:require('../screens/images/PreferencesCuisines/AmericanGrey.png')
                        },
                        {
                            id:3,
                            name:"Barbeque",
                            image:require('../screens/images/PreferencesCuisines/BarbequeGrey.png')
                        },
                        {
                            id:4,
                            name:"British",
                            image:require('../screens/images/PreferencesCuisines/BritishGrey.png')
                        },
                        {
                            id:5,
                            name:"Brunch",
                            image:require('../screens/images/PreferencesCuisines/BrunchGrey.png')
                        },
                        {
                            id:6,
                            name:"Caribbean",
                            image:require('../screens/images/PreferencesCuisines/CaribbeanGrey.png')
                        },
                        {
                            id:7,
                            name:"Greek",
                            image:require('../screens/images/PreferencesCuisines/GreekGrey.png')
                        },
                        {
                            id:8,
                            name:"Healthy",
                            image:require('../screens/images/PreferencesCuisines/HealthyGrey.png')
                        },
                        {
                            id:10,
                            name:"indian",
                            image:require('../screens/images/PreferencesCuisines/IndianGrey.png')
                        },
                        {
                            id:11,
                            name:"Italian",
                            image:require('../screens/images/PreferencesCuisines/ItalianGrey.png')
                        },
                        {
                            id:12,
                            name:"Japanese",
                            image:require('../screens/images/PreferencesCuisines/JapaneseGrey.png')
                        },
                        {
                            id:13,
                            name:"Lebanese",
                            image:require('../screens/images/PreferencesCuisines/LebaneseGrey.png')
                        },
                        {
                            id:14,
                            name:"Mexican",
                            image:require('../screens/images/PreferencesCuisines/MexicanGrey.png')
                        },
                        {
                            id:15,
                            name:"Spanish",
                            image:require('../screens/images/PreferencesCuisines/SpanishGrey.png')
                        },
                        {
                            id:16,
                            name:"Thai",
                            image:require('../screens/images/PreferencesCuisines/ThaiGrey.png')
                        },
                        {
                            id:17,
                            name:"Turkish",
                            image:require('../screens/images/PreferencesCuisines/TurkishGrey.png')
                        },
                        {
                            id:18,
                            name:"Vietnam",
                            image:require('../screens/images/PreferencesCuisines/VietnameseGrey.png')
                        },


                        ],
         };
      }
      selectItem = data => {
        data.item.isSelect = !data.item.isSelect;
        data.item.selectedClass = data.item.isSelect ? styles.selected : styles.list;
      
        const index = this.state.dataSource.findIndex(
          item => data.item.id === item.id
        );
      
        this.state.dataSource[index] = data.item;
      
        this.setState({
          dataSource: this.state.dataSource,
        });
      };
      
      
      
      renderItem = data => 
                <View style={styles.buttonContainer}>
                
                <TouchableOpacity onPress={() => this.selectItem(data)}>
                    <Image  style={[styles.list, data.item.selectedClass,]}
                    source={data.item.image}
                    
                    />
                
                <Text numberOfLines={2}
                            style={styles.textStyle}>{data.item.name}</Text>
                </TouchableOpacity>
                </View>
      render() {
      
        const itemNumber = this.state.dataSource.filter(item => item.isSelect).length;
        if (this.state.loading) 
        {
            return (
          <View style={styles.loader}>
           <ActivityIndicator size="large" color="purple" />
          </View>
        );
      }
       
       return (
           <View  style={styles.rowContainer}>
            <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300'}}>Cuisines</Text>
          <ScrollView horizontal
           showsHorizontalScrollIndicator={false}>
              <FlatList horizontal
                  data={this.state.dataSource}
                  ItemSeparatorComponent={this.FlatListItemSeparator}
                  renderItem={item => this.renderItem(item)}
                  keyExtractor={item => item.id.toString()}
               />
              </ScrollView>
      
      
      </View>
      );}}
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
         },
       
        loader: {
          flex: 1, 
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        },
        list: {
          paddingVertical: 5,
          marginLeft:10,
          backgroundColor: "white",
          justifyContent: "flex-start",
          alignItems: "center",
          zIndex: -1,
          width:50,height:50
        },
        
      rowContainer:
        {  
            flex:0.3,
            width:'100%',
            height:180,
            padding: 10,
            marginHorizontal: 15,
            borderBottomColor: 'orange',
            borderBottomWidth: 5,
            borderColor:'transparent',
            borderWidth:0.6
      
        },
      
        buttonContainer: {
          marginTop: 7,
          width:120,
          height:130,
          justifyContent:'center',
          padding:5,
          borderColor:'transparent',
          borderWidth:0.5,
          marginHorizontal:2
      },
      textStyle:
      {
          color: '#999',
          paddingTop: 20,
          letterSpacing: 1,
           marginLeft: 20
      },
       
        selected:
         {
             tintColor: "#1BCA9B"
          },
        },
        
        );