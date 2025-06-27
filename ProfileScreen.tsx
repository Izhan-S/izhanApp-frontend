import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.Z5VoUpiWSKSlmnTQe9XyuAHaHV?rs=1&pid=ImgDetMain&cb=idpwebpc2' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Izhan Sohail</Text>
      <Text style={styles.role}>Top-rated Host · Riyadh</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionText}>
          I'm a passionate host who loves creating cozy, welcoming spaces for
          travelers (except for dogs). Over 200+ happy guests, and counting!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Got questions? Reach him out on:</Text>
        <Text style={styles.sectionText}>📧 izhan.sohail@livedin.co</Text>
        <Text style={styles.sectionText}>📱 +966-500-123-456</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e8f8f5',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#007b83',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a3c40',
  },
  role: {
    fontSize: 16,
    color: '#555',
    marginBottom: 45,
  },
  section: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 5.00,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007b83',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#007b83',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 40,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});