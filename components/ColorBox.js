import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox({ bgColor, text, color }) {
  return (
    <View style={[{ backgroundColor: bgColor }, styles.box]}>
      <Text style={{ color: color }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});
