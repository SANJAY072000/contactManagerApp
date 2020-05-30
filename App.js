import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';
import DeleteContactScreen from './screens/DeleteContactScreen';

const Stack=createStackNavigator();


export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' 
      screenOptions={{
        headerStyle:{
          backgroundColor:'#b83227'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          color:'#fff'
        }
      }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
        title:'Contact App'
      }}/>
      <Stack.Screen name='AddNewContactScreen' 
      component={AddNewContactScreen} options={{
        title:'Add New Contact'
      }}/>
      <Stack.Screen name='EditContactScreen' component={EditContactScreen} options={{
        title:'Edit Contact'
      }}/>
      <Stack.Screen name='ViewContactScreen' component={ViewContactScreen} options={{
        title:'View Contact'
      }}/>
      <Stack.Screen name='DeleteContactScreen' component={DeleteContactScreen} options={{
        title:'Delete Contact'
      }}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

