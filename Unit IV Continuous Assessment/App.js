import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetailScreen from './screens/MovieDetailScreen';
import MovieScreen from './screens/MovieScreen';

const Stack = createStackNavigator();

// function HomeScreen(){
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//     <Text>HomeScreen</Text>
//   </View>
//   )
// }
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Movie'>
    <Stack.Screen name="MoviesDetails" component={MovieDetailScreen}/>
      <Stack.Screen name="Movie" component={MovieScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
