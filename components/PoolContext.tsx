import React, { createContext, useContext, useState } from 'react';
import * as Contacts from 'expo-contacts';

// הגדרת סוג עבור פרטי הכרטיס
interface CardDetails {
  number: string;
  expire: string;
  cvv: string;
  type: string;
}

// הגדרת סוג עבור הקונטקסט
interface PoolContextType {
  poolName: string;
  setPoolName: (name: string) => void;
  selectedContacts: Contacts.Contact[];
  setSelectedContacts: React.Dispatch<React.SetStateAction<Contacts.Contact[]>>;
  cardDetails: CardDetails | null; // פרטי הכרטיס
  setCardDetails: (details: CardDetails) => void;
}

// יצירת הקונטקסט עם ערכים ריקים כברירת מחדל
const PoolContext = createContext<PoolContextType | undefined>(undefined);

// ספק הקונטקסט
export const PoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [poolName, setPoolName] = useState<string>(''); // ניהול שם הבריכה
  const [selectedContacts, setSelectedContacts] = useState<Contacts.Contact[]>([]); // ניהול אנשי קשר שנבחרו
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null); // ניהול פרטי הכרטיס

  return (
    <PoolContext.Provider value={{ poolName, setPoolName, selectedContacts, setSelectedContacts, cardDetails, setCardDetails }}>
      {children}
    </PoolContext.Provider>
  );
};

// הוק לשימוש בקונטקסט
export const usePool = () => {
  const context = useContext(PoolContext);
  if (!context) {
    throw new Error('usePool must be used within a PoolProvider');
  }
  return context;
};