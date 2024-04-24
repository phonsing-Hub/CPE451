import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const EmergencyReportScreen = () => {
  const navigation = useNavigation();

  const callEmergencyNumber = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    
    <View style={styles.container}>

      <View style={styles.headerBackground}>
      <Text style={styles.headerText}>แจ้งเหตุด่วน</Text>
      </View>

      <Text style={styles.label}>         </Text>
      <TextInput
        style={styles.input}
        placeholder="                                           วัน/เดือน/ปี"
      />

      <Text style={styles.label}> </Text>
      <TextInput
        style={styles.input}
        placeholder="                                             เลขห้อง"
      />

<View style={styles.section}>
        <Button
          title="02-999-9999"
          onPress={() => callEmergencyNumber('02-999-9999')}
          color="#b39ddb"
        />
      </View>

      <Text style={styles.label}> </Text>
      <TextInput
        style={[styles.input, styles.detailsInput]}
        placeholder="รายละเอียด"
        multiline
      />

      {/* File upload button */}
      <View style={styles.section}>
      <Button title="แนบไฟล์" onPress={() => {}} color="#CA9CAC" />
      </View>

      {/* Submit button */}
      <View style={styles.section}>
      <Button title="ส่งรายงาน" onPress={() => console.log('Submitted')} color="#42bd41" />
      </View>

     
      <View style={[styles.section, styles.backButton]}>
        <View style={styles.circularButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <AntDesign name='left' size={36} color={'#CA9CAC'}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF0E6',
  },
  label: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#b39ddb',
    borderColor: '#b39ddb',
    borderRadius: 15,
    padding: 10,
  },
  detailsInput: {
    textAlignVertical: 'top',
    borderColor: '#CA9CAC',
    backgroundColor: '#CA9CAC',
    width: 370, // Set the desired width
    height: 220,
  },
  section: {
    marginTop: 20,
    alignItems: 'center',
  
  },
  headerBackground: {
    backgroundColor: '#b39ddb',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: 370, // Set the desired width
    height: 63,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff', // Header text color
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 30,
  },
  circularButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmergencyReportScreen;
