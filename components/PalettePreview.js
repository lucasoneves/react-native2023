import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ColorPalette from '../screens/ColorPalette';

const PalettePreview = ({ palette, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={palette.colors.slice(0, 4)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 15,
    backgroundColor: '#ccc',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  box: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    marginBottom: 20,
  },
});

export default PalettePreview;
