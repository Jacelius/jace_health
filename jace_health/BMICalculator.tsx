// BMICalculator.tsx
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BMICalculator({ navigation }) {
  const [height, setHeight] = useState(0); // centimeters
  const [weight, setWeight] = useState(0); // kilograms
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters ** 2); // kg/m^2

  return (
    <ScrollView style={styles.container}>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text> Height: {height} cm</Text>
        <Text> Weight: {weight} kg</Text>
        <Text> BMI: {bmi.toFixed(2)}</Text>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={text => setHeight(Number(text))}
        placeholder="Height (cm)"
        keyboardType="numeric"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={text => setWeight(Number(text))}
        placeholder="Weight (kg)"
        keyboardType="numeric"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});