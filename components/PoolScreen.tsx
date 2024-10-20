import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Avatar, Paragraph } from 'react-native-paper';
import { usePool } from '@/components/PoolContext'; // שימוש ב-Context כדי לקבל את המידע
import { ThemedText } from '@/components/ThemedText';

export default function PoolScreen() {
  const { selectedContacts } = usePool(); // אנשי הקשר הנבחרים והשם מתוך ה-Context
  const poolName = "My Awesome Pool"; // כאן תוכל לקבל את השם מה-Context או כ-Prop אם תרצה

  return (
    <View style={styles.container}>
      {/* הצגת שם ה-Pool */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.poolTitle}>
          {poolName}
        </ThemedText>
        <ThemedText type="subtitle">Your Group Members</ThemedText>
      </View>

      {/* רשימת אנשי הקשר הנבחרים */}
      <FlatList
        data={selectedContacts}
        keyExtractor={(item) => item.id || item.name || ''}
        renderItem={({ item }) => (
          <Card style={styles.contactCard}>
            <Card.Content style={styles.contactContent}>
              {/* תמונת איש הקשר */}
              {item.imageAvailable && item.image?.uri ? (
                <Avatar.Image size={48} source={{ uri: item.image.uri }} />
              ) : (
                <Avatar.Icon size={48} icon="account" />
              )}
              <View style={styles.contactInfo}>
                <Title>{item.name || 'No Name'}</Title>
              </View>
            </Card.Content>
          </Card>
        )}
        numColumns={2} // הצגת אנשי הקשר בצורה של שתי עמודות
        contentContainerStyle={styles.contactsContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  poolTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactsContainer: {
    paddingBottom: 20,
  },
  contactCard: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  contactContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactInfo: {
    flex: 1,
    marginLeft: 10,
  },
});
