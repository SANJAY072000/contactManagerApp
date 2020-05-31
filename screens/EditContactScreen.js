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

  updateContact=async key=>{
  if(this.state.fname!==''&&this.state.lname!==''&&this.state.phone!==''&&this.state.email!==''&&this.state.city!==''){
    let obj={
      fname:this.state.fname,
      lname:this.state.lname,
      phone:this.state.phone,
      email:this.state.email,
      city:this.state.city
    };
    await AsyncStorage.setItem(key,JSON.stringify(obj))
    .then(()=>this.props.navigation.goBack())
    .catch(err=>console.log(err));
  }
  else Alert.alert('All fields are required');
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
    backgroundColor: "#fff",
    margin: 10
  },
  inputItem: {
    margin: 10
  },
  button: {
    backgroundColor: "#B83227",
    marginTop: 40
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
