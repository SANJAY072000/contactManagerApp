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
      obj['key']=key;
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
  deleteContact=key=>this.props.navigation.navigate('DeleteContactScreen',{key});

  render(){
    return(
      <ScrollView style={styles.container}>
      <View style={styles.contactIconContainer}>
      <Text style={styles.contactIcon}>{this.state.fname[0].toUpperCase()}
      </Text>
      <View style={styles.nameContainer}>
      <Text style={styles.name}>{`${this.state.fname} ${this.state.lname}`}</Text>
      </View>
      </View>
      <View style={styles.infoContainer}>
      <Card>
      <CardItem bordered><Text style={styles.infoText}>Phone</Text></CardItem>
      <CardItem bordered><Text style={styles.infoText}>{this.state.phone}</Text></CardItem>
      </Card>
      <Card>
      <CardItem bordered><Text style={styles.infoText}>Email</Text></CardItem>
      <CardItem bordered><Text style={styles.infoText}>{this.state.email}</Text></CardItem>
      </Card>
      <Card>
      <CardItem bordered><Text style={styles.infoText}>City</Text></CardItem>
      <CardItem bordered><Text style={styles.infoText}>{this.state.city}</Text></CardItem>
      </Card>
      </View>
      <Card style={styles.actionContainer}>
      <CardItem bordered style={styles.actionButton}>
      <TouchableOpacity onPress={()=>this.smsAction(this.state.phone)}>
      <Entypo size={50} name='message' color='#B83227'/>
      </TouchableOpacity>
      </CardItem>
      <CardItem bordered style={styles.actionButton}>
      <TouchableOpacity onPress={()=>this.callAction(this.state.phone)}>
      <Entypo size={50} name='phone' color='#B83227'/>
      </TouchableOpacity>
      </CardItem>
      </Card>
      <Card style={styles.actionContainer}>
      <CardItem bordered style={styles.actionButton}>
      <TouchableOpacity onPress={()=>this.editContact(this.state.key)}>
      <Entypo size={50} name='edit' color='#B83227'/>
      </TouchableOpacity>
      </CardItem>
      <CardItem bordered style={styles.actionButton}>
      <TouchableOpacity onPress={()=>this.deleteContact(this.state.key)}>
      <Entypo size={50} name='trash' color='#B83227'/>
      </TouchableOpacity>
      </CardItem>
      </Card>
      </ScrollView>
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
  },
  infoContainer: {
    flexDirection: "column"
  },
});
