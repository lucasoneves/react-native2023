import React from 'react';

import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';

import BoxColor from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>React Native App 2023</Text>
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: '100%' }}
          data={colors}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <BoxColor
              text={item.hexCode}
              bgColor={item.hexCode}
              color={
                parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
                  ? '#000'
                  : '#fff'
              }
            />
          )}
          ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
  },
  container: {
    padding: 20,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  black: {
    backgroundColor: '#999',
  },
  blue: {
    backgroundColor: 'lightblue',
  },
  cyan: {
    backgroundColor: '#0D98BA',
  },
});

export default ColorPalette;
