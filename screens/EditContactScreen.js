import React,{Component} from 'react';
import { StyleSheet, Text, View, 
  TouchableWithoutFeedback, Keyboard, AsyncStorage, Alert } from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';


export default class EditContactScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      fname:'',
      lname:'',
      phone:'',
      email:'',
      city:'',
      key:''
    };
  }

  componentDidMount(){
    this.props.navigation.addListener('focus',()=>{
      let key=this.props.route.params.key;
      this.getContact(key);
    });
  }

  getContact=async key=>{
    await AsyncStorage.getItem(key)
    .then(res=>{
      let obj=JSON.parse(res);
      obj['key']=key;
      this.setState(obj);
    })
    .catch(err=>console.log(err));
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Welcome to EditContactScreen</Text>
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
