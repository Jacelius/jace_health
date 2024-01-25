// App.tsx
import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BMICalculator from './BMICalculator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Jace Health' }}
        />
        <Stack.Screen 
          name="BMICalculator" 
          component={BMICalculator} 
          options={{ title: 'BMI Calculator' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="BMI Calculator"
        onPress={() => navigation.navigate('BMICalculator')}
      />
    </View>
  );
}