import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Contacts from 'expo-contacts';
import { TextInput, Card, Paragraph, Avatar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { usePool } from '@/components/PoolContext'; 

export default function Addcontacts() {
  const { selectedContacts, setSelectedContacts } = usePool(); // קבלת רשימת אנשי קשר שנבחרו
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contacts.Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [offset, setOffset] = useState<number>(0); 
  const [hasMore, setHasMore] = useState<boolean>(true); 

  const PAGE_SIZE = 50; 

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        loadContacts();
      }
    })();
  }, []);

  const loadContacts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.Image],
        pageOffset: offset,
        pageSize: PAGE_SIZE,
      });

      if (data.length > 0) {
        const sortedData = data.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        setContacts((prev) => [...prev, ...sortedData]); 
        setOffset((prevOffset) => prevOffset + PAGE_SIZE); 
      }

      if (data.length < PAGE_SIZE) {
        setHasMore(false); 
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = contacts.filter((contact) => {
        const name = contact.name?.toLowerCase();
        const query = searchQuery.toLowerCase();
        return name?.startsWith(query);
      }).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts); 
    }
  }, [searchQuery, contacts]);

const toggleContactSelection = (contact: Contacts.Contact) => {
  const isSelected = selectedContacts.some((c: Contacts.Contact) => c.id === contact.id);

  if (isSelected) {
    setSelectedContacts((prev) => prev.filter((c) => c.id !== contact.id));
  } else {
    setSelectedContacts((prev) => [...prev, contact]);
  }
};

const isContactSelected = (contactId: string) => {
  return selectedContacts.some((contact) => contact.id === contactId);
};

  return (
    <View style={styles.container}>
      <TextInput
        label="Search Contacts"
        mode="outlined"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />

      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={filteredContacts}
        keyExtractor={(item) => item.id || item.name || ''}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleContactSelection(item)}>
            <Card style={styles.contactCard}>
              <Card.Content style={styles.contactContent}>
                {item.imageAvailable && item.image?.uri ? (
                  <Avatar.Image size={48} source={{ uri: item.image.uri }} />
                ) : (
                  <Avatar.Icon size={48} icon="account" />
                )}
                <View style={styles.contactInfo}>
                  <Paragraph>{item.name || 'No Name'}</Paragraph>
                </View>
                {isContactSelected(item.id || '') && (
                  <Ionicons name="checkmark-circle" size={24} color="green" />
                )}
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
        onEndReached={loadContacts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
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
  input: {
    marginBottom: 10,
  },
  contactCard: {
    marginBottom: 10,
    borderRadius: 10,
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
