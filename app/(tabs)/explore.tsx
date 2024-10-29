import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Collapsible } from '@/components/layout/Collapsible';
import { ExternalLink } from '@/components/layout/ExternalLink';
import ParallaxScrollView from '@/components/layout/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">UniCard+</ThemedText>
      </ThemedView>

      <ThemedText style={styles.sectionTitle}>Who we are, and what we solve</ThemedText>
      
      <View style={styles.collapsible}>
        <Collapsible title="Behind the idea">
          <ThemedText style={styles.bodyText}>
            UniCard+ was born out of the need for a simpler way to manage group purchases. 
            Whether it's splitting the cost of a trip, concert tickets, or a group gift, we saw how difficult it can be for one person to handle payments for everyone. 
            UniCard+ gives each participant equal control and security when contributing to a shared expense, eliminating the need for one person to carry the financial load.
          </ThemedText>
          <ExternalLink href="https://unicardplus.com">
            <ThemedText type="link" style={styles.linkText}>Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
      </View>

      <View style={styles.collapsible}>
        <Collapsible title="What is UniCard+?">
          <ThemedText style={styles.bodyText}>
            UniCard+ is a platform designed to simplify group payments. It allows users to create a shared payment pool and generate a one-time virtual credit card for a specific group purchase. 
            Everyone contributes their part, and once the pool is complete, the purchase is made using the generated card, ensuring transparency and security for all.
          </ThemedText>
        </Collapsible>
      </View>

      <View style={styles.collapsible}>
        <Collapsible title="How does it work?">
          <ThemedText style={styles.bodyText}>
            Using UniCard+ is simple:
            {"\n"}1. Create a pool and invite participants through a link or from your contact list.
            {"\n"}2. Each participant adds their payment.
            {"\n"}3. Set a payment date, either controlled by the group organizer or approved by all participants.
            {"\n"}4. Once the pool is complete, UniCard+ generates a virtual credit card to complete the transaction securely.
          </ThemedText>
          <ExternalLink href="https://unicardplus.com">
            <ThemedText type="link" style={styles.linkText}>Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
      </View>

      <View style={styles.collapsible}>
        <Collapsible title="Our vision">
          <ThemedText style={styles.bodyText}>
            Our vision is to revolutionize group payments by making them accessible, secure, and fair for everyone involved. 
            We want UniCard+ to be the go-to platform for shared expenses, making group transactions simple, transparent, and enjoyable.
          </ThemedText>
          <ExternalLink href="https://unicardplus.com">
            <ThemedText type="link" style={styles.linkText}>Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
      </View>

      <View style={styles.collapsible}>
        <Collapsible title="Our offers and cards">
          <ThemedText style={styles.bodyText}>
            UniCard+ offers different card options to suit various needs:
            {"\n"}- **Gold Card**: Valid for one week, ideal for short-term group expenses.
            {"\n"}- **Platinum Card**: Valid for six months, perfect for long-term shared expenses.
            {"\n"}- **Diamond Card**: Valid for one year, designed for recurring or large group purchases.
            {"\n"}- **Silver Card**: Valid for 24 hours, perfect for quick, short-term payments.
            {"\n"}- **Bronze Card**: Valid for a single payment, ideal for one-time transactions.
          </ThemedText>
        </Collapsible>
      </View>

      <View style={styles.collapsible}>
        <Collapsible title="Feedback from customers">
          <ThemedText style={styles.bodyText}>
            "UniCard+ has made group payments so easy! I no longer have to worry about chasing friends for money. The whole process is transparent and secure." – Sarah L.
            {"\n"}"The virtual card feature is a game changer! We used it for our group trip and it was seamless." – Michael B.
          </ThemedText>
        </Collapsible>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    paddingLeft: 10,
  },
  collapsible: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#F8F9FA', // צבע רקע עדין
    borderRadius: 8,
    padding: 10,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 22,
  },
  linkText: {
    color: '#1A73E8', // כחול נעים ללינקים
    marginTop: 10,
  },
    reactLogo: {
    height: 370,
    width: 400,
    marginTop: 0,
    alignSelf: 'center',
  },
});