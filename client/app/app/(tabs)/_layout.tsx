import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomHeader from '@/components/CustomHeader';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Layout() {
//   return (
//     <SafeAreaProvider>

//     </SafeAreaProvider>
//   );
// return <Tabs />;
return(

<Tabs  
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#394635', // Background color of the tab bar
        }}}
        >
      <Tabs.Screen
        name="index"
        options={{
            header: () => <CustomHeader pageName="FoodieCommunity"/>,
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="PantryPro"
        options={{
          header: () => <CustomHeader pageName="PantryPro"/>,
          title: 'PantryPro',
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="clipboard-list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="MealMaster"
        options={{
          header: () => <CustomHeader pageName="MealMaster"/>,
          title: 'MealMaster',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cutlery" color={color} />,
        }}
      />
      <Tabs.Screen
        name="SmartShopper"
        options={{
          header: () => <CustomHeader pageName="SmartShopper"/>,
          title: 'SmartShopper',
          tabBarIcon: ({ color }) => <Entypo name="shopping-cart" size={28} color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="FreshAlert"
        options={{
          header: () => <CustomHeader pageName="FreshAlert"/>,
          title: 'FreshAlert',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cookie-refresh" size={28} color={color} />,
        }}
      />
</Tabs>
)
}
