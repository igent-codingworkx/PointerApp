import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Navigation } from 'react-native-navigation'
const { width, height } = Dimensions.get('window')

export default class Travel extends Component {


    constructor(props) {
        super(props)
        this.state = {
          loading: false,
          dataSource: [
                        {
                            id:1,
                            name:"Adventures",
                            image:require('../screens/images/PreferencesTravel/AdventuresGrey.png')
                        },
                        {
                            id:2,
                            name:"Camping",
                            image:require('../screens/images/PreferencesTravel/CampingGrey.png')
                        },
                        {
                            id:3,
                            name:"CityBreaks",
                            image:require('../screens/images/PreferencesTravel/CityBreaksGrey.png')
                        },
                        {
                            id:4,
                            name:"LongHaul",
                            image:require('../screens/images/PreferencesTravel/LongHaulGrey.png')
                        },
                        {
                            id:5,
                            name:"Luxury",
                            image:require('../screens/images/PreferencesTravel/LuxuryGrey.png')
                        },
                        {
                            id:6,
                            name:"Relaxing",
                            image:require('../screens/images/PreferencesTravel/RelaxingGrey.png')
                        },
                        {
                            id:7,
                            name:"Staycations",
                            image:require('../screens/images/PreferencesTravel/StaycationsGrey.png')
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
        //style={{ width: 60, height: 60, margin: 6}}
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
}    
    render() {
        return (
            <View style={{flex:1}}>
               <View  style={styles.rowContainer}>
      <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300'}}>Travel</Text>
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