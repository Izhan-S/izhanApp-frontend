import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function EstimateScreen() {
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -width,
        duration: 7000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.marqueeContainer}>
        <Animated.Text
          style={[styles.marqueeText, { transform: [{ translateX }] }]}
        >
           MAKE MORE WITH LIVEDIN MAKE MORE WITH LIVEDIN
        </Animated.Text>
      </View>

    
      <Text style={styles.subtitle}>
        No hidden fees, no surprise markups. Just honest numbers to fuel your hosting dreams.
      </Text>


      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Select your district"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Select number of rooms"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Estimate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003b36',
    padding: 20,
    alignItems: 'center',
    flexGrow: 1,
  },
  marqueeContainer: {
    height: 70,
    overflow: 'hidden',
    width: '100%',
    marginBottom: 20,
    justifyContent: 'center',
  },
  marqueeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#87e7e1',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 16,
    lineHeight: 22,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#1e4f4a',
    color: '#fff',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    marginBottom: 15,
    paddingLeft: 20,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#007b83',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});