import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux-store';
import { fetchPosts } from '../../redux-store/postSlice';
import { AppDispatch } from '../../redux-store';

type Props = NativeStackScreenProps<any>;

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function HomeScreen({ navigation }: Props) {
const username = useSelector((state: RootState) => state.user.username);
  const [place, setPlace] = useState('');
  const [guests, setGuests] = useState('1 adult');
  const [dates, setDates] = useState('');
  const dispatch = useDispatch<AppDispatch>();

 const { posts, isLoading, error } = useSelector((state: RootState) => state.posts);


  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPost}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <>
          <View style={styles.estimateTopRight}>
            <TouchableOpacity
              style={styles.estimateTopButton}
              onPress={() => navigation.navigate('Estimate')}
            >
              <Text style={styles.estimateTopButtonText}>Get Estimate</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.header}>
            Welcome, {username}! Stay <Text style={styles.bold}>Local.</Text> Experience{' '}
            <Text style={styles.bold}>Global</Text>
          </Text>

          <Text style={styles.subtext}>
            Join thousands of guests who trust Livedin to turn stays into seamless,
            rewarding experiences.
          </Text>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type in city or country...."
              value={place}
              onChangeText={setPlace}
            />
            <TextInput
              style={styles.input}
              placeholder="Select dates"
              value={dates}
              onChangeText={setDates}
            />
            <TextInput
              style={styles.input}
              placeholder="Guests"
              value={guests}
              onChangeText={setGuests}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>🔍 Search</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: 'https://www.parkregisbyprincedubaiislands.com/wp-content/uploads/2025/03/Global-Image-Website-e1743156069371.png',
            }}
            style={styles.promoImage}
          />
        </>
      }
      ListFooterComponent={
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.buttonText}>View Host Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('About')}
          >
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#e8f8f5',
    alignItems: 'center',
  },
  estimateTopRight: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 5,
    marginTop: -10,
    marginBottom: 10,
  },
  estimateTopButton: {
    backgroundColor: '#007b83',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 3,
  },
  estimateTopButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    color: '#1a3c40',
  },
  bold: {
    fontWeight: 'bold',
    color: '#007b83',
  },
  subtext: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  searchContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    padding: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  searchButton: {
    backgroundColor: '#007b83',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  promoImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#007b83',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#023020',
  },
});
