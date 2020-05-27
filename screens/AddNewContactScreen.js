import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class AddNewContactScreen extends Component {
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
