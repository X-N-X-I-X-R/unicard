import React, { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Createpool() {
  const [poolName, setPoolName] = useState<string>(''); 

  const handleCreatePool = () => {
    const newPoolName = 'Test Pool Name';
    setPoolName(newPoolName);
    console.log('Pool Created: ', newPoolName);
  };

  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={handleCreatePool}>
        <ThemedText>Create Pool</ThemedText>
      </Pressable>
      {poolName !== '' && <ThemedText>Pool Name: {poolName}</ThemedText>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
});
