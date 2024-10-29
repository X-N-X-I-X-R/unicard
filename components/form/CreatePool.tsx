// components/CreatePool.tsx
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setPoolName } from '@/server/store/actions/poolSlice';

interface CreatePoolProps {
  onNext: () => void;
}

const CreatePool: React.FC<CreatePoolProps> = ({ onNext }) => {
  const [localPoolName, setLocalPoolName] = useState('');
  const dispatch = useDispatch();

  return (
    <Card style={styles.formCard}>
      <Card.Content>
        <Title>Create a Pool</Title>
        <TextInput
          label="Enter Pool Name"
          mode="outlined"
          value={localPoolName}
          onChangeText={setLocalPoolName}
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={() => {
            if (localPoolName) {
              dispatch(setPoolName(localPoolName));
              onNext();
            } else {
              Alert.alert('Error', 'Please enter a valid pool name.');
            }
          }}
          style={styles.createButton}
        >
          Next
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  formCard: {
    marginTop: 10,
    padding: 20,
    margin: 20,
  },
  input: {
    marginBottom: 10,
  },
  createButton: {
    marginTop: 10,
  },
});

export default CreatePool;
