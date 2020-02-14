import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet,Alert,TextInput } from 'react-native'


const { width, height } = Dimensions.get('window')


import { List, Card } from 'react-native-paper';

export default class Help extends Component {

    state = {
          expanded:false
    }

    _handlePress = () =>
        this.setState({
            expanded: !this.state.expanded
        });

   

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                    <Text style={{ color: '#2C3335', fontSize: 25, letterSpacing: 1, fontWeight: '500', paddingTop: 30 }}>Help</Text>
                    <TouchableOpacity onPress={() => alert("close")}>
                        <Image source={require('./images/close.png')}
                            style={{ width: 18, height: 18, left: 100, }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', width: '85%', height: height - 850, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 20, marginHorizontal: 20, marginTop: 20 }}>
                    <Image source={require('./images/search.png')} style={{ width: 18, height: 18, top: 15 }} />
                    <View style={{ margin: 12 }}>
                        <TextInput style={{ fontSize: 17, }}
                            placeholder="Search by map name..">

                        </TextInput>
                    </View>


                </View>
    
                  <View style ={{flex:1,marginTop:30}}>
   
                   <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                 
                <ScrollView>

    {/* collapse for the Getting Started */}

                <View  onPress={this. _handlePress} style={styles.Btn}>
         
                     <List.Accordion  color ="black" titleStyle ={{fontSize:15}} title="Getting Started" style={{marginTop:-2}}>
       
                     <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion  textStyle ={{fontSize:10}} titleStyle ={{fontSize:13,paddingLeft:10}} title="Creating an Account" style={{marginTop:-2,}}>
                    
                            
                        <Text 
                                    style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

                        <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Discovering Maps" style={{marginTop:-2}}>
                    
                            <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

                 <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>


                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="How Do I Create a Map?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

                        <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Why Do I Have to Pay to Access Some Maps?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

        </List.Accordion>
        </View>

    {/* collapse for the About Pointer*/}

                <View  onPress={this. _handlePress} style={styles.Btn}>
         
                     <List.Accordion titleStyle ={{fontSize:15}} title="About Pointer" style={{marginTop:-2}}>
       
                     <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}} title="Creating an Account" style={{marginTop:-2,}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

  <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Discovering Maps" style={{marginTop:-2}}>
                    
                            <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

     <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="How Do I Create a Map?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

<View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Why Do I Have to Pay to Access Some Maps?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

        </List.Accordion>
        </View>


 {/* collapse for the Creating a Map */}


                <View onPress={this. _handlePress} style={styles.Btn}>
         
                     <List.Accordion  titleStyle ={{fontSize:15}} title="Creating a Map" style={{marginTop:-2}}>

         <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
         
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Creating an Account" style={{marginTop:-2,}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

  <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Discovering Maps" style={{marginTop:-2}}>
                    
                            <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

<View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="How Do I Create a Map?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

  <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Why Do I Have to Pay to Access Some Maps?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>



        </List.Accordion>

            </View>

 {/* collapse for the Purchasing a Map */}


                <View onPress={this. _handlePress} style={styles.Btn}>
         
                     <List.Accordion  titleStyle ={{fontSize:15}} title="Purchasing a Map" style={{marginTop:-2}}>
       
           <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Creating an Account" style={{marginTop:-2,}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

  <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Discovering Maps" style={{marginTop:-2}}>
                    
                            <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>
 <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="How Do I Create a Map?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

<View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Why Do I Have to Pay to Access Some Maps?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

        </List.Accordion>

            </View>
 {/* collapse for the Reviews */}


                <View onPress={this. _handlePress} style={styles.Btn}>
         
                     <List.Accordion  titleStyle ={{fontSize:15}} title="Reviews" style={{marginTop:-2}}>
     <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
         
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Creating an Account" style={{marginTop:-2,}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

    <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Discovering Maps" style={{marginTop:-2}}>
                    
                            <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

<View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="How Do I Create a Map?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>
   <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Why Do I Have to Pay to Access Some Maps?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

        </List.Accordion>

            </View>
            
 {/* collapse for the Payment*/}


                <View onPress={this. _handlePress} style={styles.Btn}>
         
                     <List.Accordion  titleStyle ={{fontSize:15}} title="Payment" style={{marginTop:-2}}>
     <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
         
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Creating an Account" style={{marginTop:-2,}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

 <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Discovering Maps" style={{marginTop:-2}}>
                    
                            <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

    <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="How Do I Create a Map?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>
  <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Why Do I Have to Pay to Access Some Maps?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

        </List.Accordion>

            </View>
 {/* collapse of  Your Account*/}


                <View onPress={this. _handlePress} style={styles.Btn}>
         
                     <List.Accordion  titleStyle ={{fontSize:15}} title="Your Account" style={{marginTop:-2}}>
       
        <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Creating an Account" style={{marginTop:-2,}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>
       <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Discovering Maps" style={{marginTop:-2}}>
                    
                            <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

      <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="How Do I Create a Map?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>
  <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Why Do I Have to Pay to Access Some Maps?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

        </List.Accordion>

            </View>
 {/* collapse for the Contact Us*/}


                <View onPress={this. _handlePress} style={styles.Btn}>
         
                     <List.Accordion  titleStyle ={{fontSize:15}} title="Contact Us" style={{marginTop:-2}}>
    <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
         
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Creating an Account" style={{marginTop:-2,}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>
   <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>

                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Discovering Maps" style={{marginTop:-2}}>
                    
                            <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

    <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="How Do I Create a Map?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>
     <View style ={{width:'89%',borderColor:'#ccc',borderWidth:0.4,marginHorizontal:20}}></View>
                        <List.Accordion titleStyle ={{fontSize:13,paddingLeft:10}}title="Why Do I Have to Pay to Access Some Maps?" style={{marginTop:-2}}>
                    
                            
                        <Text 
                            style ={styles.textStyling}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        
                        </List.Accordion>

        </List.Accordion>

            </View>


</ScrollView>
        </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
     
      Btn: {
     
        width:'95%',
        borderBottomWidth:0.5,
        borderBottomColor:'#ccc',
         marginHorizontal:10
        
        
      },
      textStyling:
      {
          color:'#999',
          fontSize:12,
          letterSpacing:1,
          marginHorizontal:25,
          letterSpacing:0.5
        }
      
})