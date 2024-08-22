import { Text, View ,Image,StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { Link } from 'expo-router';
import { loginUser } from "@/hooks/userAuth";
import { useState } from 'react';

export default function login({ onLoginSuccess}) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    const data = await loginUser(email, password);
    if (data) {
      onLoginSuccess(); // Call the success callback
    } else {
      alert('Login failed');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        padding:20,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor:'#B4B39F'
      }}
    >
      <Image
          source={require('@/assets/icons and images/main.png')}
          style={styles.Image}
          />
          <Text style={styles.Heading}>Login User</Text>
        <View style={styles.formContainer}>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Text style={styles.warning}><Link href="./login" >Don't have an account?Register</Link></Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Image: {
        width: '90%', // Adjust the width as needed
        height: 300, // Adjust the height as needed
        marginTop: 10, // Gap from the top
        alignSelf: 'center',
        borderRadius: 15, // Rounded corners
    },
    Heading:{
        fontSize:20,
        marginTop: 10,
    },
    warning:{
        fontSize:15,
        marginTop: -15,
        textAlign: 'center',
        marginBottom: 10,
    },
    formContainer:{
        marginTop: 20, // Gap between image and form
    },
    input:{
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 80,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#384535', // Background color of the button
        paddingVertical: 10, // Vertical padding
        paddingHorizontal: 5, // Horizontal padding
        borderRadius: 15, // Rounded corners
        alignItems: 'center', // Center the text
      },
      buttonText: {
        color: '#fff', // Text color
        fontSize: 16, // Font size
        fontWeight: 'light', // Font weight
      },
})