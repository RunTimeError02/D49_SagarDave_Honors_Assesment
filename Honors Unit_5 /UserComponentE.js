import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {UserConsumer} from '../UserContext';

export class ComponentE extends Component{
  render(){
    return(
     <UserConsumer>
     {username => {
       return (
         <View style={styles.container}>
         <Text> Hello from ComponentE</Text>
         </View>
       )
     }}
     </UserConsumer>
    )
  }
}

export default ComponentE;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFA500'
  }
})
