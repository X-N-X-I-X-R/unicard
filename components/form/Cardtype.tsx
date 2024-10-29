import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { usePool } from '@/components/shared/PoolContext'; // Import the context

interface createRandomCardProps {
  poolName: string;
}

const CreateRandomCard: React.FC<createRandomCardProps> = ({ poolName }) => {
  const [cardNumber, setCardNumber] = useState(''); 
  const [expire, setExpire] = useState(''); 
  const [cvv, setCvv] = useState(''); 
  const [cardType, setCardType] = useState('Gold'); // סוג הכרטיס הנבחר
  const [currentStep, setCurrentStep] = useState(1); // ניהול השלב הנוכחי
  const { colors } = useTheme(); // שימוש בנושאים של האפליקציה לקבלת הצבעים
  const { setCardDetails } = usePool(); // Use the context to set card details

  const cardTypes = ['Gold', 'Platinum', 'Diamond']; // רשימת סוגי הכרטיסים

  // פונקציה ליצירת כרטיס עם פרטים אקראיים
  const createRandomCard = () => {
    const randomCardNumber = Math.floor(Math.random() * 10000000000000000).toString().padStart(16, '0');
    const randomExpire = `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}/${Math.floor(Math.random() * 5 + 23)}`;
    const randomCvv = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    setCardNumber(randomCardNumber);
    setExpire(randomExpire);
    setCvv(randomCvv);

    // Set the card details in the context
    setCardDetails({
      number: randomCardNumber,
      expire: randomExpire,
      cvv: randomCvv,
      type: cardType,
    });

    setCurrentStep(2); // מעבר לשלב הבא לאחר יצירת הכרטיס
  };

  // תצוגה של כל שלב בנפרד
  const renderSection = () => {
    if (currentStep === 1) {
      return (
        <>
          {cardTypes.map((type) => (
            <TouchableOpacity key={type} onPress={() => setCardType(type)} style={styles.cardTypeContainer}>
              <Ionicons
                name={cardType === type ? "radio-button-on" : "radio-button-off"}
                size={24}
                color={cardType === type ? colors.primary : colors.text}
              />
              <Text style={[styles.cardTypeText, { color: colors.text }]}>{type} Card</Text>
            </TouchableOpacity>
          ))}

          <Button 
            icon="arrow-right" 
            mode="contained" 
            onPress={() => setCurrentStep(2)} 
            style={styles.nextButton} 
            labelStyle={styles.nextButtonText}
          >
            Next
          </Button>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <Text style={[styles.title, { color: colors.text }]}> </Text>
          <View style={[styles.cardContainer, { backgroundColor: '#1E2A38', borderColor: '#000' }]}>
            <View style={styles.chipContainer}>
              <Ionicons name="card" size={40} color="#FFD700" />
              {/* הוספת שם מיוחד ליד האייקון */}
              <Text style={[styles.specialText, { color: '#FFD700', marginLeft: 10 }]}>Unicard+</Text>
            </View>
            
            {/* מספר הכרטיס באמצע */}
            <View style={styles.centeredCardNumber}>
              <Text style={[styles.cardNumber, { color: '#fff' }]}>{cardNumber}</Text>
            </View>

            <View style={styles.cardInfoRow}>
              <View>
                <Text style={styles.label}>Card Holder</Text>
                <Text style={[styles.cardText, { color: '#fff' }]}>{poolName}</Text>
              </View>
              <View>
                <Text style={styles.label}>Expires</Text>
                <Text style={[styles.cardText, { color: '#fff' }]}>{expire}</Text>
              </View>
            </View>

            <View style={styles.cardInfoRow}>
              <Text style={[styles.cvv, { color: '#fff' }]}>CVV: {cvv}</Text>
              {/* הצגת סוג הכרטיס בצד השני של CVV */}
              <Text style={[styles.cardTypeText, { color: 'gold' }]}>{cardType}</Text>
            </View>
          </View>

          <Button 
            icon="credit-card-plus-outline" 
            mode="contained" 
            onPress={createRandomCard} 
            style={styles.createButton} 
            labelStyle={styles.createButtonText}
          >
            Create Card
          </Button>
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      {renderSection()}
    </View>
  );
};

export default CreateRandomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'center',
    backgroundColor:'#FFD700'
  },
  cardTypeText: {
    fontSize: 18,
    marginLeft: 10,
  },
  cardContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width:350,
    height:190
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specialText: {
    fontSize: 24, // גודל כתב מיוחד ל-Unicard+
    fontFamily: 'serif', // שנה את זה לכתב המיוחד שלך
    fontWeight: 'bold',
  },
  centeredCardNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, // מרווח בין פריטים
  },
  cardNumber: {
    fontSize: 20, // גודל מספר הכרטיס
    letterSpacing: 2, // רווחים בין הספרות
  },
  cardInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    marginTop :10
  },
  label: {
    fontSize: 14,
    color: '#bbb',
  },
  cardText: {
    fontSize: 16,
  },
  cvv: {
    fontSize: 14,
    marginTop: 10,
  },
  createButton: {
    marginTop: 30,
    width: '80%',
    padding: 10,
    borderRadius: 10,
  },
  createButtonText: {
    fontSize: 18,
  },
  nextButton: {
    marginTop: 30,
    width: '80%',
    padding: 10,
    borderRadius: 10,
  },
  nextButtonText: {
    fontSize: 18,
  },
});