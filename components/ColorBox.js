import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox({ color, text }) {
  return (
    <View style={[styles.box, color]}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'F3f3f3',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    fontSize: 20,
  },
});
