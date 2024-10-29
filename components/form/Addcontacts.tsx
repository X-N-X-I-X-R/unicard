import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import { TextInput, Card, Paragraph, Avatar, FAB } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'; // ייבוא Redux
import { addContact, removeContact } from '@/server/store/actions/poolSlice'; // ייבוא פעולות Redux

export default function Addcontacts() {
  const dispatch = useDispatch();
  const selectedContacts = useSelector((state: any) => state.pool.contacts); // שימוש ב-selector
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
    dispatch(removeContact(contact)); // הסרת איש קשר דרך Redux
  } else {
    dispatch(addContact(contact)); // הוספת איש קשר דרך Redux
  }
};


  const isContactSelected = (contactId: string) => {
    return selectedContacts.some((contact: Contacts.Contact) => contact.id === contactId);
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

      {/* כפתור פעולה עיקרי (FAB) */}
      {selectedContacts.length > 0 && (
        <FAB
          style={styles.fab}
          small
          icon="check"
          label="Confirm"
          onPress={() => {
            Alert.alert('Selected Contacts', `You have selected ${selectedContacts.length} contacts.`);
          }}
        />
      )}
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#4CAF50',
  },
});
