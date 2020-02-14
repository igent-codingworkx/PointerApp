import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView,FlatList } from 'react-native'
import { Navigation } from 'react-native-navigation'
const { width, height } = Dimensions.get('window')

export default class Sports extends Component {
    constructor(props) {
        super(props)
        this.state = {
          loading: false,
          dataSource: [
                        {
                            id:1,
                            name:"Archery",
                            image:require('../screens/images/PreferencesSports/ArcheryGrey.png')
                        },
                        {
                            id:2,
                            name:"Athletics",
                            image:require('../screens/images/PreferencesSports/AthleticsGrey.png')
                        },
                        {
                            id:3,
                            name:"Badminton",
                            image:require('../screens/images/PreferencesSports/BadmintonGrey.png')
                        },
                        {
                            id:4,
                            name:"Baseball",
                            image:require('../screens/images/PreferencesSports/BaseballGrey.png')
                        },
                        {
                            id:5,
                            name:"Basketball",
                            image:require('../screens/images/PreferencesSports/BasketballGrey.png')
                        },
                        {
                            id:6,
                            name:"Boxing",
                            image:require('../screens/images/PreferencesSports/BoxingGrey.png')
                        },
                        {
                            id:7,
                            name:"Cricket",
                            image:require('../screens/images/PreferencesSports/CricketGrey.png')
                        },
                        {
                            id:8,
                            name:"Cyling",
                            image:require('../screens/images/PreferencesSports/CyclingGrey.png')
                        },
                        {
                            id:10,
                            name:"Dancing",
                            image:require('../screens/images/PreferencesSports/DancingGrey.png')
                        },
                        {
                            id:11,
                            name:"Football",
                            image:require('../screens/images/PreferencesSports/FootballGrey.png')
                        },
                        {
                            id:12,
                            name:"Golf",
                            image:require('../screens/images/PreferencesSports/GolfGrey.png')
                        },
                        {
                            id:13,
                            name:"Gym",
                            image:require('../screens/images/PreferencesSports/GymGrey.png')
                        },
                        {
                            id:14,
                            name:"Gymnastic",
                            image:require('../screens/images/PreferencesSports/GymnasticsGrey.png')
                        },
                        {
                            id:15,
                            name:"HIIT",
                            image:require('../screens/images/PreferencesSports/HIITGrey.png')
                        },
                        {
                            id:16,
                            name:"Hiking",
                            image:require('../screens/images/PreferencesSports/HikingGrey.png')
                        },
                        {
                            id:17,
                            name:"Hockey",
                            image:require('../screens/images/PreferencesSports/HockeyGrey.png')
                        },
                        {
                            id:18,
                            name:"Netball",
                            image:require('../screens/images/PreferencesSports/NetballGrey.png')
                        },
                        {
                            id:19,
                            name:"Paddleboarding",
                            image:require('../screens/images/PreferencesSports/PaddleboardingGrey.png')
                        },
                        {
                            id:20,
                            name:"HorseRiding",
                            image:require('../screens/images/PreferencesSports/HorseRidingGrey.png')
                        },
                        {
                            id:21,
                            name:"IceHockey",
                            image:require('../screens/images/PreferencesSports/IceHockeyGrey.png')
                        },
                        {
                            id:22,
                            name:"Pilates",
                            image:require('../screens/images/PreferencesSports/PilatesGrey.png')
                        },
                        {
                            id:23,
                            name:"Rowing",
                            image:require('../screens/images/PreferencesSports/RowingGrey.png')
                        },
                        {
                            id:24,
                            name:"Rugby",
                            image:require('../screens/images/PreferencesSports/RugbyGrey.png')
                        },
                        {
                            id:25,
                            name:"Snooker",
                            image:require('../screens/images/PreferencesSports/SnookerGrey.png')
                        },
                        {
                            id:26,
                            name:"Running",
                            image:require('../screens/images/PreferencesSports/RunningGrey.png')
                        },
                        {
                            id:27,
                            name:"Spinning",
                            image:require('../screens/images/PreferencesSports/SpinningGrey.png')
                        },
                        {
                            id:28,
                            name:"Squash",
                            image:require('../screens/images/PreferencesSports/SquashGrey.png')
                        },
                        {
                            id:29,
                            name:"Surfing",
                            image:require('../screens/images/PreferencesSports/SurfingGrey.png')
                        },
                        {
                            id:30,
                            name:"Swimming",
                            image:require('../screens/images/PreferencesSports/SwimmingGrey.png')
                        },
                        {
                            id:31,
                            name:"Table Tennis",
                            image:require('../screens/images/PreferencesSports/TableTennisGrey.png')
                        },
                        {
                            id:32,
                            name:"Tennis",
                            image:require('../screens/images/PreferencesSports/TennisGrey.png')
                        },
                        {
                            id:33,
                            name:"Triathlon",
                            image:require('../screens/images/PreferencesSports/TriathlonGrey.png')
                        },
                        {
                            id:34,
                            name:"Volley ball",
                            image:require('../screens/images/PreferencesSports/VolleyballGrey.png')
                        },
                        {
                            id:35,
                            name:"Yoga",
                            image:require('../screens/images/PreferencesSports/YogaGrey.png')
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
        return (
            <View style ={{flex:1}}>
               <View  style={styles.rowContainer}>
      <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300'}}>Sports</Text>
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