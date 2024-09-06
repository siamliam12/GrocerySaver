import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader: React.FC = ({pageName}) => {
  return (
    <SafeAreaView style={styles.header}>
    <View style={styles.header}>
      <Text style={styles.title}>{pageName}</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3B3A28',
    paddingTop: 1,
    paddingBottom: 7,
    
    alignItems: 'flex-start',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginLeft:15,
    fontWeight: 'light',
  },
});

export default CustomHeader;