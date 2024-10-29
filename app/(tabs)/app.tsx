import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Image, Alert } from 'react-native';
import { FAB } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import Addcontacts from '@/components/form/Addcontacts';
import { PoolProvider, usePool } from '@/components/shared/PoolContext';
import CreateRandomCard from '@/components/form/Cardtype';
import ReviewChoices from '@/components/form/ReviewChoices';
import CreatePool from '@/components/form/CreatePool';
import store from '@/server/store/configureStore'; // Import the Redux store

const AppContent = () => {
  const { selectedContacts, setPoolName, poolName } = usePool();
  const [currentStep, setCurrentStep] = useState(1);
  const [localPoolName, setLocalPoolName] = useState('');

  const renderSection = () => {
    if (currentStep === 1) {
      console.log(`CreatePoll: ${poolName}`);
      return <CreatePool onNext={() => setCurrentStep(2)} />;
    }

    if (currentStep === 2) {
      console.log('Selected Contacts:', selectedContacts);
      return <Addcontacts />;
    }

    if (currentStep === 3) {
      return <CreateRandomCard poolName={localPoolName} />;
    }

    if (currentStep === 4) {
      return (
        <ReviewChoices
          onConfirm={() => Alert.alert('Submitted!', 'Your selections have been sent.')}
          onEdit={() => setCurrentStep(1)}
        />
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[{ id: '1', component: renderSection() }]}
        renderItem={({ item }) => (
          <View style={styles.stepContainer}>
            {item.component}
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.reactLogo}
              resizeMode="cover"
            />
          </View>
          
        )}
      />

      {currentStep === 2 && selectedContacts.length > 0 && (
        <FAB
          style={styles.fab}
          small
          icon="check"
          label="Next"
          onPress={() => {
            setCurrentStep(3);
            console.log('Moving to Step 3');
          }}
        />
      )}

      {currentStep === 3 && (
        <FAB
          style={styles.fab}
          small
          icon="check"
          label="Finish"
          onPress={() => {
            setCurrentStep(4);
            console.log('Moving to Step 4');
          }}
        />
      )}
    </View>
  );
};

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PoolProvider>
        <AppContent />
      </PoolProvider>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
  fab: {
    backgroundColor: '#4CAF50',
  },
  fabContactList: {
    zIndex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  imageContainer: {
    height: 250,
    width: 400,
    marginTop: 0,
    alignSelf: 'center',
  },
  stepContainer: {
    gap: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
  },
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
  flatListContainer: {
    paddingBottom: 150,
  },
});