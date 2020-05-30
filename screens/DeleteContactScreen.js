import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class EditContactScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Welcome to DeleteContactScreen</Text>
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
