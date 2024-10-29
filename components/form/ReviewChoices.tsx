import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { usePool } from '@/components/shared/PoolContext'; // ייבוא מה-Context

const ReviewChoices = ({ onConfirm, onEdit }: { onConfirm: () => void; onEdit: () => void }) => {
  const { selectedContacts, poolName, cardDetails } = usePool(); // קבלת הנתונים מ-Context

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Review Your Selections</Title>
          {/* הצגת שם הקבוצה */}
          <Paragraph>Pool Name: {poolName}</Paragraph>
          
          {/* הצגת אנשי הקשר שנבחרו */}
          <Title style={styles.subTitle}>Selected Contacts:</Title>
          <FlatList
            data={selectedContacts}
            keyExtractor={(item) => item.id || item.name || ''}
            renderItem={({ item }) => (
              <Paragraph>{item.name || 'Unnamed Contact'}</Paragraph>
            )}
          />

          {/* הצגת פרטי הכרטיס */}
          <Title style={styles.subTitle}>Card Details:</Title>
          {cardDetails ? (
            <>
              <Paragraph>Card Type: {cardDetails.type}</Paragraph>
              <Paragraph>Card Number: {cardDetails.number}</Paragraph>
              <Paragraph>Expire: {cardDetails.expire}</Paragraph>
              <Paragraph>CVV: {cardDetails.cvv}</Paragraph>
            </>
          ) : (
            <Paragraph>No card details available</Paragraph>
          )}

          {/* כפתור לאישור */}
          <Button mode="contained" onPress={onConfirm} style={styles.confirmButton}>
            Confirm and Submit
          </Button>

          {/* כפתור לחזרה לעריכה */}
          <Button mode="outlined" onPress={onEdit} style={styles.editButton}>
            Edit Choices
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ReviewChoices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
  },
  subTitle: {
    marginTop: 20,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
  },
  editButton: {
    marginTop: 10,
  },
});