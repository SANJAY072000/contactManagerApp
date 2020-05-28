import React,{Component} from 'react';
import { StyleSheet, Text, View, 
  AsyncStorage, Alert, ScrollView } from 'react-native';
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
    this.saveContact=this.saveContact.bind(this);
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
      <ScrollView style={styles.container}>
      <Form>
      <Item style={styles.inputItem} floatingLabel>
        <Label>First Name</Label>
        <Input autoCorrect={false} onChangeText={fname=>this.setState({fname})}/>
      </Item>
      <Item style={styles.inputItem} floatingLabel>
        <Label>Last Name</Label>
        <Input autoCorrect={false} onChangeText={lname=>this.setState({lname})}/>
      </Item>
      <Item style={styles.inputItem} floatingLabel>
        <Label>Phone</Label>
        <Input autoCorrect={false} keyboardType="numeric" 
        onChangeText={phone=>this.setState({phone})}/>
      </Item>
      <Item style={styles.inputItem} floatingLabel>
        <Label>Email</Label>
        <Input autoCorrect={false} onChangeText={email=>this.setState({email})}/>
      </Item>
      <Item style={styles.inputItem} floatingLabel>
        <Label>City</Label>
        <Input autoCorrect={false} onChangeText={city=>this.setState({city})}/>
      </Item>
      <Button style={styles.button} full onPress={this.saveContact}>
      <Text style={styles.buttonText}>Save Contact</Text></Button>
    </Form>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  inputItem: {
    margin: 10
  },
  button: {
    backgroundColor: "#B83227",
    margin: 40
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  empty: {
    height: 500,
    backgroundColor: "#FFF"
  }
});


