import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const LogoHeader: React.FC = () => {
  return (
    <SafeAreaView style={styles.header}>
    <View style={styles.header}>
    <MaterialIcons name="local-grocery-store" size={24} color="white" />
      <Text style={styles.title}>GrocerySaver</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#394635',
    padding: 10,
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LogoHeader;