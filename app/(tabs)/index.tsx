import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} // צבע הרקע כמו בקוד הקודם
      headerImage={
        <Image
          source={require('@/assets/images/logo.webp')}
          style={styles.reactLogo}
        />
      }
    >
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to UniCard+</ThemedText>
        <HelloWave />
      </ThemedView> */}

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitle}>Step 1: Create a Pool</ThemedText>
        <ThemedText style={styles.bodyText}>
          Start by creating a new pool for your group. Invite friends from your contact list or share an invite link.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitle}>Step 2: Add Participants</ThemedText>
        <ThemedText style={styles.bodyText}>
          Each participant can join the pool and submit their payment amount. You can track who has contributed.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitle}>Step 3: Set Payment Date</ThemedText>
        <ThemedText style={styles.bodyText}>
          Choose a payment date for the group. The group organizer can either control the payment or require approval from all participants.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitle}>Step 4: Finalize and Pay</ThemedText>
        <ThemedText style={styles.bodyText}>
          Once all participants have paid, a one-time virtual credit card will be generated for the group purchase.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8',
    marginBottom: 20,
  },
  stepContainer: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  reactLogo: {
    height: 370,
    width: 400,
    marginTop: 0,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});
