import LogoHeader from'@/components/LogoHeader'
import { Stack } from "expo-router";
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

enableScreens();
export default function RootLayout() {
  // return (
  //   <SafeAreaProvider>
  //   <Stack>
  //     <Stack.Screen name="index" options={{
  //                 header: () => <CustomHeader pageName="FoodieCommunity"/>, // Use the custom header component
  //                 headerStyle: {
  //                   backgroundColor: '#f4511e', // Example: change header background color
  //                 },
  //                 headerTintColor: '#fff', // Example: change header text color
  //                 headerTitleStyle: {
  //                   fontWeight: 'bold', // Example: change header title font weight
  //                 },
  //     }}/>
  //      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  //   </Stack>
  //   </SafeAreaProvider>
  // );
  // return <Stack />;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        header: () => <LogoHeader />,
      }} />
    </Stack>
  );
}
