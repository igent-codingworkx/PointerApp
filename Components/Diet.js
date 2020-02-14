import React from "react";
import{StyleSheet,View,ActivityIndicator,FlatList,Text,TouchableOpacity,Image, ScrollView} from "react-native";

export default class Diet extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      dataSource: [
                    {
                        id:1,
                        name:"Dairy free",
                        image:require('../screens/images/PreferencesDiet/DairyGrey.png')
                    },
                    {
                        id:2,
                        name:"Egg free",
                        image:require('../screens/images/PreferencesDiet/EggFreeGrey.png')
                    },
                    {
                        id:3,
                        name:"Gluten",
                        image:require('../screens/images/PreferencesDiet/GlutenFreeGrey.png')
                    },
                    {
                        id:4,
                        name:"High Protein",
                        image:require('../screens/images/PreferencesDiet/HighProteinGrey.png')
                    },
                    {
                        id:5,
                        name:"Keto",
                        image:require('../screens/images/PreferencesDiet/KetoGrey.png')
                    },
                    {
                        id:6,
                        name:"Nut free",
                        image:require('../screens/images/PreferencesDiet/NutFreeGrey.png')
                    },
                    {
                        id:7,
                        name:"Paleo",
                        image:require('../screens/images/PreferencesDiet/PaleoGrey.png')
                    },
                    {
                        id:8,
                        name:"Pescatarian",
                        image:require('../screens/images/PreferencesDiet/PescatarianGrey.png')
                    },
                    {
                        id:10,
                        name:"Raw",
                        image:require('../screens/images/PreferencesDiet/RawGrey.png')
                    },
                    {
                        id:11,
                        name:"Vegan",
                        image:require('../screens/images/PreferencesDiet/VeganGrey.png')
                    },
                    {
                        id:12,
                        name:"Vegetarian",
                        image:require('../screens/images/PreferencesDiet/VegetarianGrey.png')
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
 
 return (
     <View  style={styles.rowContainer}>
      <Text style={{ fontSize: 25, letterSpacing: 1.3,fontWeight:'300'}}>Diet</Text>
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