import React from 'react';
import { Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CheckoutButton: React.FC = () => {
  const navigation = useNavigation<any>(); // שימוש בנווט עבור מעבר דינמי

  const handleCheckout = async () => {
    try {
      console.log('Initiating checkout...');
      const response = await fetch('https://922f-77-127-91-12.ngrok-free.app/create-price', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response status:', response.status);
      const session = await response.json();
      console.log('Response data:', session);

      // if (session.url) {
      //   console.log('Redirecting to:', session.url);
      //   // מעבר לעמוד התשלום של Stripe
      //   window.location.href = session.url;
        
        // בדיקת אישור ולאחר מכן ניווט ל-app.tsx
        if (response.ok) {
          navigation.navigate('app'); // ניווט ל-tab app.tsx
      } else {
        Alert.alert('Error', 'Payment failed to complete.');
      }
      // console.error('Failed to initiate checkout. No URL in response.');
      // Alert.alert('Error', 'Failed to initiate checkout.');
    } catch (error) {
      console.error('An error occurred:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return <Button title="Checkout" onPress={handleCheckout} />;
};

export default CheckoutButton;
