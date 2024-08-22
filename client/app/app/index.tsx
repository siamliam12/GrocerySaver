import { Text, View } from "react-native";
import { Link } from 'expo-router';
import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href='./userAuth/register'>Register</Link>
      <Link href='./userAuth/login'>Login</Link>
    </View>
  );
}
