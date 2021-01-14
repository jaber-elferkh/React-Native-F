import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 38,
    height: 80,
    backgroundColor: '#fff2c8',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3c3c3c',
    fontWeight: 'bold',
  },
});
