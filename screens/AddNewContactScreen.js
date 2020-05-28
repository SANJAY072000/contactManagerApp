import React,{Component} from 'react';
import { StyleSheet, Text, View, 
  AsyncStorage, Keyboard, Alert, 
  TouchableWithoutFeedback, ScrollView } from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';

export default class AddNewContactScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      fname:'',
      lname:'',
      phone:'',
      email:'',
      city:''
    };
  }

saveContact=async ()=>{
  if(this.state.fname!==''&&this.state.lname!==''&&this.state.phone!==''&&this.state.email!==''&&this.state.city!==''){
    let cobj={
      fname:this.state.fname,
      lname:this.state.lname,
      phone:this.state.phone,
      email:this.state.email,
      city:this.state.city
    };
    await AsyncStorage.setItem(Date.now().toString(),JSON.stringify(cobj))
    .then(()=>this.props.navigation.goBack())
    .catch(err=>console.log(err));
  }
  else Alert.alert('All fields are required');
}



  render(){
    return(
      <View style={styles.container}>
        <Text>Welcome to AddNewContactScreen</Text>
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
