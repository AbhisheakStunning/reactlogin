import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import {SafeAreaView, TextInput, TouchableOpacity} from 'react-native';


const LoginScreen: React.FC = () => {

const[email, setEmail]= React.useState<string>('')

const[password, setPassword]= React.useState<string>('')

const [emailError, setEmailError] = React.useState<string | null>(null);

const [passwordError, setPasswordError] = React.useState<string | null>(null);



const handleSubmit = () => {
  // Basic validation example

  let valid = true;

   // Validate email
   if (!validateEmail(email)) {
    setEmailError('Please enter a valid email address');
    valid = false;
  } else {
    setEmailError(null);
  }

   // Validate password
   if (password.length < 6) {
    setPasswordError('Password must be at least 6 characters long');
    valid = false;
  } else {
    setPasswordError(null);
  }

  if (valid) {
    // Handle form submission logic here
    Alert.alert('Success', 'You have successfully logged in');
  }



  if (!email || !password) {
    Alert.alert('Error', 'Please enter both email and password');
    return;
  }
  
  if (!validateEmail(email)) {
    Alert.alert('Error', 'Please enter a valid email address');
    return;
  }

  // Handle form submission logic here
  Alert.alert('Success', 'You have successfully logged in');
};

// Basic email validation function
const validateEmail = (email:string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};


  return (


    <View style={styles.fullbox}>


      <Text style={styles.titlebox}>login</Text>

      <SafeAreaView>
     <TextInput
     
      style={styles.input} placeholder='Enter your Email' keyboardType='email-address' autoCapitalize='none'  autoCorrect={false}  value={email} onChangeText={setEmail}

      onBlur={() => {
        // Validate email on blur
        if (!validateEmail(email)) {
          setEmailError('Please enter a valid email address');
        } else {
          setEmailError(null);
        }
      }}
    />
    {emailError && <Text style={styles.errorText}>{emailError}</Text>}
     
    

     <TextInput

     style={styles.input} placeholder='Enter Your Password' secureTextEntry={true} value={password} onChangeText={setPassword}

     onBlur={() => {
      // Validate password on blur
      if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters long');
      } else {
        setPasswordError(null);
      }
    }}

     />

{passwordError && <Text style={styles.errorText}>{passwordError}</Text>}


<TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText} onPress={handleSubmit}>LOGIN</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
      
    </View>
  )
}


const styles=StyleSheet.create({




fullbox:{

  borderColor:'#efefef',
  borderStyle:'solid',
  borderWidth:1,


},

titlebox:{

  color:'white',
  margin:10,
  backgroundColor:'green',
  padding:30,
  fontSize:20,
  textTransform:'capitalize',
  marginTop:100,

 



},

input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderColor: '#ccc',
  borderRadius: 5,
},

button: {
  backgroundColor: '#007BFF',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  alignItems: 'center',
  margin:10
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
errorText: {
  color: 'red',
  marginBottom: 10,
},

})

export default LoginScreen

