import React, { useCallback, useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';
const Home = ({ navigation }) => {
  const [palette, setPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (result.ok) {
      const palettes = await result.json();
      setPalette(palettes);
    }
  }, []);
  useEffect(() => {
    fetchPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  }, []);

  return (
    <FlatList
      data={palette}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          palette={item}
          onPress={() => {
            navigation.navigate('ColorPalette', item);
          }}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};

// const styles = StyleSheet.create({
//   list: {
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
// });

export default Home;
