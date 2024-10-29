import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckoutButton from '@/components/form/CheckoutButton'

const Payment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complete Your Payment</Text>
      <Text style={styles.description}>
        Enter your payment details below to proceed with the transaction.
      </Text>
     <CheckoutButton />
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
})
