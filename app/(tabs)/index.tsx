import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import {SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

const index: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleZipcodeChange = (text: string) => {
    setZipcode(text);
  };

  const validateName = (name: string): boolean => {
    // Check if the name is not empty and only contains letters and spaces
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name.trim());
  };

  const validateZipcode = (zipcode: string): boolean => {
    // Check if the zipcode is exactly 5 digits
    const zipcodePattern = /^[0-9]{5}$/;
    return zipcodePattern.test(zipcode.trim());
  };

  const validateInputs = () => {
    if (!validateName(name)) {
      Alert.alert('Error', 'Name must contain only letters and spaces, and cannot be empty.');
      return;
    }

    if (!validateZipcode(zipcode)) {
      Alert.alert('Error', 'Please enter a valid 5-digit zipcode.');
      return;
    }

    Alert.alert('Success', `Name: ${name}\nZipcode: ${zipcode}`);
  };



  const handleSearch = () => {
    // Perform search action
    if (name.trim() === '' || zipcode.trim() === '') {
      Alert.alert('Error', 'Both fields must be filled in to search');
      return;
    }

    // Here, you can implement the actual search logic, like calling an API
    Alert.alert('Searching...', `Searching for ${name} in zipcode ${zipcode}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleNameChange}
        placeholder="John Doe"
        autoCapitalize='words'
      />

      <Text style={styles.label}>Enter Zipcode:</Text>
      <TextInput
        style={styles.input}
        value={zipcode}
        onChangeText={handleZipcodeChange}
        keyboardType="numeric"
        placeholder="12345"
        maxLength={5}
      />

      
      <Button title="Search" onPress={handleSearch} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default index