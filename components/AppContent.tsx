// import React from 'react';
// import { FlatList, StyleSheet, View, Image } from 'react-native';
// import { FAB } from 'react-native-paper';
// import Addcontacts from '@/components/Addcontacts';
// import { usePool } from '@/components/PoolContext'; // שימוש ב-Context כדי לקבל את אנשי הקשר שנבחרו
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from './types'; // ייבוא סוגי הניווט

// type AppContentProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'PoolManager'>;
// };

// const AppContent = ({ navigation }: AppContentProps) => {
//   const { selectedContacts } = usePool(); // שימוש ב-Context כדי לקבל אנשי קשר שנבחרו

//   const sections = [
//     { id: '2', component: <Addcontacts navigation={navigation} /> },
//   ];

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={sections}
//         ListHeaderComponent={() => (
//           <View style={styles.titleContainer}>
//             <View style={styles.imageContainer}>
//               <Image
//                 source={require('@/assets/images/logo.webp')}
//                 style={styles.reactLogo}
//               />
//             </View>
//           </View>
//         )}
//         renderItem={({ item }) => (
//           <View style={styles.stepContainer}>
//             {item.component}
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//       />

//       {/* הצגת כפתור ה-FAB רק אם יש אנשי קשר שנבחרו */}
//       {selectedContacts.length > 0 && (
//         <FAB
//           style={styles.fab}
//           small
//           icon="check"
//           label="Finish"
//           onPress={() => navigation.navigate('PoolScreen')} // מעבר למסך PoolScreen
//         />
//       )}
//     </View>
//   );
// };

// export default AppContent;

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   imageContainer: {
//     height: 300,
//     width: 400,
//     marginTop: 0,
//     marginBottom: -104,
//   },
//   stepContainer: {
//     gap: 8,
//   },
//   reactLogo: {
//     height: '100%',
//     width: '100%',
//   },
//   fab: {
//     position: 'absolute',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#4CAF50',
//   },
// });
