import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#fff05a',
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ffbd4a',
    borderRadius: 10,
    // borderStyle: 'dashed',
    color: '#3c3c3c',
    fontSize: 16,
  },
});
