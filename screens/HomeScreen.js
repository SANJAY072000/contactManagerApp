import React,{Component} from 'react';
import { StyleSheet, Text, View, 
    TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import {Card} from 'native-base';
import {Entypo} from '@expo/vector-icons';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    }

    UNSAFE_componentWillMount(){
      const {navigation}=this.props;
      navigation.addListener('willFocus',()=>{
        this.getAllContacts();
      });
    }

    getAllContacts=async ()=>{
      await AsyncStorage.getAllKeys()
      .then(keys=>{
        return AsyncStorage.multiGet(keys)
        .then(res=>{
          this.setState({data:res.sort(function(a,b){
          if(JSON.parse(a[1]).fname<JSON.parse(b[1]).fname)return -1;
          if(JSON.parse(a[1]).fname>JSON.parse(b[1]).fname)return 1;
        })
      })
      })
        .catch(err=>console.log(err));
      })
      .catch(err=>console.log(err));
    }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.floatButton} onPress={()=>this.props
            .navigation.navigate('AddNewContactScreen')}>
        <Entypo name='plus' size={30} color='#fff'/>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    listItem: {
      flexDirection: "row",
      padding: 20
    },
    iconContainer: {
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#B83227",
      borderRadius: 100
    },
    contactIcon: {
      fontSize: 28,
      color: "#fff"
    },
    infoContainer: {
      flexDirection: "column"
    },
    infoText: {
      fontSize: 16,
      fontWeight: "400",
      paddingLeft: 10,
      paddingTop: 2
    },
    floatButton: {
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      alignItems: "center",
      justifyContent: "center",
      width: 60,
      position: "absolute",
      bottom: 10,
      right: 10,
      height: 60,
      backgroundColor: "#B83227",
      borderRadius: 100
    }
  });
