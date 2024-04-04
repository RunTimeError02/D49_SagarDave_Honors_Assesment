import { Text, View} from 'react-native';
import React, {Component} from 'react';
import {UserContext} from '../UserContext';
import ComponentE from './ComponentE';


export class ComponentD extends Component {
  render(){
    return (
      <View>
      <Text>ComponentD - {this.context}</Text>
      <ComponentE/>
      </View>
    )
  }
}

ComponentD.contextType=UserContext;
export default ComponentD;

