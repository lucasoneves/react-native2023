import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddNewPaletteModal = () => {
  const [text, setText] = useState('hey you');
  function onChangeText(e) {
    console.log(e);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Name of your color palette</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 2,
  },
  view: {},
  text: {
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 50,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#e2e2e2',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default AddNewPaletteModal;
