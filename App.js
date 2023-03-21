import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BoxColor from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>React Native App 2023</Text>
        <BoxColor text="Colored in React Native 2023" color={styles.black} />
        <BoxColor text="Colored in React Native 2023" color={styles.blue} />
        <BoxColor text="Colored in React Native 2023" color={styles.cyan} />
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
