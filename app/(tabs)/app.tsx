import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Image, Alert } from 'react-native';
import { FAB, TextInput, Button, Card, Title } from 'react-native-paper';
import Addcontacts from '@/components/Addcontacts';
import { PoolProvider, usePool } from '@/components/PoolContext'; 
import CreateRandomCard from '@/components/Cardtype'; 
import ReviewChoices from '@/components/ReviewChoices'; 
const AppContent = () => {
  const { selectedContacts, setPoolName, poolName } = usePool(); 
  const [currentStep, setCurrentStep] = useState(1); 
  const [localPoolName, setLocalPoolName] = useState(''); 

  const renderSection = () => {
    if (currentStep === 1) {
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
                  setPoolName(localPoolName); 
                  setCurrentStep(2); 
                  console.log('Pool Name Set:', localPoolName); // בדיקת השם
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
    }

    if (currentStep === 2) {
      console.log('Selected Contacts:', selectedContacts); // בדיקת אנשי קשר שנבחרו
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

      {/* הצגת כפתור ה-FAB בהתאם לשלב הנוכחי */}
      {currentStep === 2 && selectedContacts.length > 0 && (
        <FAB
          style={styles.fab}
          small
          icon="check"
          label="Next"
          onPress={() => {
            setCurrentStep(3);
            console.log('Moving to Step 3'); // בדיקת מעבר לשלב הבא
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
            console.log('Moving to Step 4'); // בדיקת מעבר לשלב הבא
          }} // מעבר לשלב הסיכום
        />
      )}
    </View>
  );
};

export default function App() {
  return (
    <PoolProvider>
      <AppContent />
    </PoolProvider>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,  // הצג בצד ימין, אפשר לשנות ל-left אם רוצים בצד שמאל
        zIndex: 1, // וודא שהכפתור מעל כל רכיב אחר

  },
  fab: {
    backgroundColor: '#4CAF50',
  },
  fabContactList: {
    zIndex: 1, // וודא שהכפתור מעל כל רכיב אחר
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
    paddingBottom: 150, // הוסף מרווח כדי שה-FAB לא יסתיר את התוכן
  },
});
