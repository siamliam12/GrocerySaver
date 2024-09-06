import { ActivityIndicator, Button, Text, View } from "react-native";
import { Link } from 'expo-router';
import React, { useEffect, useState } from "react";
import { checkIfLoggedIn, logOutUser } from "@/hooks/userAuth";
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from "@/components/CustomHeader";
import { Stack } from "expo-router";

export default function Tab() {
  const router = useRouter();
  const handleLogout = async() => {
    const refresh = await AsyncStorage.getItem('refreshToken');
    const accessToken = await AsyncStorage.getItem('accessToken');
    // const data = await logOutUser()
    if (accessToken){
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
      router.push('/');
    } else {
      console.error('Logout failed');
    }
  }
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await checkIfLoggedIn();
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);
  if (isLoggedIn === null) {
    // Show a loading indicator while checking login status
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (isLoggedIn) {
    return (
      <View style={{
        flex: 1,
        padding:20,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor:'#B4B39F'
      }}>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Please log in to continue.</Text>
        {/* Render guest content or redirect to login */}
        <Link href='./userAuth/login'>Login</Link>
        <Link href='./userAuth/register'>Register</Link>
      </View>
    );
  }
};

