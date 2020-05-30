import React,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView, 
  TouchableOpacity, Linking, Platform, Alert, AsyncStorage } from 'react-native';
import {Card, CardItem} from 'native-base';
import {Entypo} from '@expo/vector-icons';


export default class ViewContactScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      fname:'dummy',
      lname:'dummy',
      phone:'dummy',
      email:'dummy',
      city:'dummy',
      key:'dummy'
    };
  }

  componentDidMount(){
    this.props.navigation.addListener('focus',()=>{
      let key=this.props.route.params.key;
      
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Welcome to ViewContactScreen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
