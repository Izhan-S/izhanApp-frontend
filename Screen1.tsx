import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from '../../src/components/AppHeader';
import { TextInput } from 'react-native';
import SubmitButton from '../../src/components/SubmitButton';
import Screen2 from './Screen2';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
type Props = NativeStackScreenProps<RootStackParamList, 'Screen1'>;


const Screen1 = ({ navigation }: Props) => {

  const [name,setName] = useState ('');
  const [submitName, setsubmitName] = useState('');

  const confirmName = () => {
        setsubmitName(name);

  }
  const handleNavigate = () => {
    navigation.navigate('Screen2');
  }
  
  return (
 
    <View style={styles.container}>
      <AppHeader />

      <View style={styles.inputBox}> 
          <TextInput
          style={styles.field}
          placeholder="Please enter your name"
          value={name}
          onChangeText={setName}
          />
          <SubmitButton title="Verify!" onPress={confirmName} style={{backgroundColor:'#FF0000'}} />
            {submitName !== '' && (

          <Text style={styles.resultText}>
          Thank you for verifying, Welcome <Text style= {{fontWeight: 'bold'}}>{submitName}</Text>  😊 
          </Text>
        
              
)}
<SubmitButton
  title="Proceed to next screen..."
  onPress={() => navigation.navigate('Screen2')}
  style={{ marginTop: 220 }}
  textStyle={{ fontSize: 18 }}
/>


      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom : 40,
    justifyContent: 'center',
    backgroundColor: '#e8f8f5',
    
  },
inputBox: {
  flex: 1,
  marginHorizontal: 20,
  marginTop: 60,
},
field: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 10,
  padding: 12,
  fontSize: 16,
  backgroundColor: '#fff',
},
resultText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#023020',
  },
});

export default Screen1;
