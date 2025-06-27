import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Our story?</Text>

      <Text style={styles.paragraph}>
        Livedin is a premium stay platform designed to connect locals and travelers seamlessly. With a
        focus on comfort, authenticity, and trust, we help create meaningful experiences through
        short-term stays.
      </Text>

      <Text style={styles.paragraph}>
        Whether you're a guest or a host, Livedin ensures a smooth, reliable, and delightful experience.
      </Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://livedin.co')}>
        <Text style={styles.link}>🌐 Visit our website</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

    
      <View style={styles.newsletterBox}>
        <Text style={styles.subheading}>📬 Subscribe to our newsletter</Text>
        <Text style={styles.subtext}>
          Stay updated with the latest listings, travel tips, and exclusive deals.
        </Text>

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.contactBox}>
        <Text style={styles.subheading}> Contact Us</Text>
        <Text style={styles.subtext}>Have questions? Reach out at:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto: izhan.sohail@livedin.co')}>
          <Text style={styles.link}>support@livedin.co</Text>
        </TouchableOpacity>
        <Text style={styles.lasttext}> (English/Arabic)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f9f9',
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007b83',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#004d4d',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 22,
  },
  subtext: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#007b83',
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 30,
  },
  newsletterBox: {
    width: '100%',
    backgroundColor: '#e6f2f2',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  subscribeButton: {
    backgroundColor: '#007b83',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginTop: 5,
  },
  subscribeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lasttext: {
   color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactBox: {
    marginTop: 40,
    alignItems: 'center',
  },
});
