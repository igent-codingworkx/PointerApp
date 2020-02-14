import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity,ImageBackground,Dimensions,ScrollView,Image } from 'react-native';
import React from 'react'
import { Card,List,Accordion ,Menu, Divider, Provider,} from 'react-native-paper';
import ReviewsReceived from './ReviewsReceived';
import ReviewsGiven from './ReviewsGiven';

export default class ReviewScreen extends  React.Component {
   
 constructor() {
   super();

   this.state = { expanded1: false,
     expanded2: false,
     expanded3: false,  
     
   }

   if (Platform.OS === 'android') {
     UIManager.setLayoutAnimationEnabledExperimental(true);
   }
 }

 changeLayout1 = () => {
   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
   this.setState({ expanded1: !this.state.expanded1 });
 }
 changeLayout2 = () => {
   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
   this.setState({ expanded2: !this.state.expanded2 });
 }
 


 render() {
   
   return (
     <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        <List.Accordion title="Reviews Given" style={{marginTop:-2}} titleStyle ={{fontSize:18}}  onPress={this.changeLayout1} >
         
          <ReviewsGiven/>
         
        </List.Accordion>

      <View style ={{width:'95%',height:0.5,borderWidth:0.5,borderColor:'#ccc',marginHorizontal:10}}></View>
       
       
          <List.Accordion title="Reviews Received" style={{marginTop:-2}} titleStyle ={{fontSize:18}}  onPress={this.changeLayout2}>
       
          <ReviewsReceived/>

        </List.Accordion>
    
       
      </ScrollView>
        
    </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
  
 },

 textStyle: {
   fontSize: 12,
   color: 'black',
   padding: 5
 },


 
 
text:{
  fontSize:10,color:'white',
  paddingTop:3
},
 
});
