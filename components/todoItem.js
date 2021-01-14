import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#ffbd4a" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ffbd4a',
    // borderStyle: 'dashed',
    borderRadius: 10,
    color: '#ffbd4a',
    fontSize: 16,
    // backgroundColor: '#fff05a',
  },
  itemText: {
    marginLeft: 10,
  },
});
