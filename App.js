import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import BoxColor from './components/ColorBox';
const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>React Native App 2023</Text>
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: '100%' }}
          data={COLORS}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <BoxColor
              text={item.colorName}
              bgColor={item.hexCode}
              color={
                parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
                  ? '#000'
                  : '#fff'
              }
            />
          )}
          ListHeaderComponent={<Text style={styles.text}>Solarized</Text>}
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
    marginTop: 30,
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

export default App;
