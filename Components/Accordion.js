import React, { Component } from 'react';
 
import { Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Image } from 'react-native';
 
export default class Accordion extends Component {
 
  constructor() {
 
    super();
 
    this.state = {
 
      updated_Height: 0
 
    }
  }
 
  componentWillReceiveProps(update_Props) {
    if (update_Props.item.expanded) {
      this.setState(() => {
        return {
          updated_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          updated_Height: 0
        }
      });
    }
  }
 
  shouldComponentUpdate(update_Props, nextState) {
 
    if (update_Props.item.expanded !== this.props.item.expanded) {
 
      return true;
 
    }
 
    return false;
 
  }
 
  render() {
 
    return (
 
      <View style={styles.Panel_Holder}>
 
        <TouchableOpacity activeOpacity={0.7} onPress={this.props.onClickFunction} style={styles.Btn}>
 
          <Text style={styles.Panel_Button_Text}>{this.props.item.title} </Text>
          <Image source ={this.props.item.image} style ={{width:30,height:30,resizeMode:'contain',}}/>
 
        </TouchableOpacity>
 
        <View style={{ height: this.state.updated_Height, overflow: 'hidden' }}>
 
          <Text style={styles.Panel_text}>
           
            {this.props.item.body}
            
          </Text>
          <Text>
            Best Brunch in London
          </Text>
 
        </View>
 
      </View>
 
    );
  }
}
const styles = StyleSheet.create({
   
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
 
  Panel_text: {
    fontSize: 18,
   
    padding: 10
  },
 
  Panel_Button_Text: {
    fontSize: 21
  },
 
  Panel_Holder: {
    borderWidth: 0.4,
   
    marginVertical: 5
  },
 
  Btn: {
    flexDirection:'row',
    padding: 10,
    justifyContent:'space-between'
    
  }
 
});