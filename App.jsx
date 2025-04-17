import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Home from './Src/Screens/Home'
import Detailed from './Src/Screens/Detailed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
    <SafeAreaView style={styles.Main}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detailed" component={Detailed} />
      </Stack.Navigator>
    </SafeAreaView>
      </NavigationContainer>
  )
}

// hello there

export default App

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  }
})