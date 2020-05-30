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
      this.getData(key);
    });
  }

  getData=async key=>{
    await AsyncStorage.getItem(key)
    .then(res=>{
      let obj=JSON.parse(res);
      obj[key]=key;
      this.setState(obj);
    })
    .catch(err=>console.log(err));
  }

  callAction=phone=>{
    let phoneNumber=phone;
    if(Platform.OS!=='android')phoneNumber=`telpromt:${phone}`;
    else phoneNumber=`tel:${phone}`;
    Linking.canOpenURL(phoneNumber)
    .then(supported=>{
      if(!supported)Alert.alert('Phone Number unavailable');
      else Linking.openURL(phoneNumber);
    })
    .catch(err=>console.log(err));
  }

  smsAction=phone=>{
    let phoneNumber=phone;
    phoneNumber=`sms:${phone}`;
    Linking.canOpenURL(phoneNumber)
    .then(supported=>{
      if(!supported)Alert.alert('Phone Number unavailable');
      else Linking.openURL(phoneNumber);
    })
    .catch(err=>console.log(err));
  }

  editContact=key=>this.props.navigation.navigate('EditContactScreen',{key});

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
    backgroundColor: "#fff"
  },
  contactIconContainer: {
    height: 200,
    backgroundColor: "#B83227",
    alignItems: "center",
    justifyContent: "center"
  },
  contactIcon: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#fff"
  },
  nameContainer: {
    width: "100%",
    height: 70,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  },
  name: {
    fontSize: 24,
    color: "#000",
    fontWeight: "900"
  },
  infoText: {
    fontSize: 18,
    fontWeight: "300"
  },
  actionContainer: {
    flexDirection: "row"
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#B83227",
    fontWeight: "900"
  }
});
