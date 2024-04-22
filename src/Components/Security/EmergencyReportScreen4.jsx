import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const EmergencyReportScreen4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={[styles.headerText, styles.whiteText]}>รายงานพฤติกรรม</Text>
      </View>

      <Text style={styles.label={color:'#8594e4',fontSize:18}}>ระบุพฤติกรรม</Text>
      <TextInput
        style={[styles.input, styles.whiteText]}
        placeholder="    " 
      />

      <Text style={styles.label={color:'#8594e4',fontSize:18}}>เลขห้อง </Text>
      <TextInput
        style={[styles.input, styles.whiteText]}
        placeholder="  "
      />

      <Text style={styles.label={color:'#8594e4',fontSize:18}}>รายละเอียด </Text>
      <TextInput
        style={[styles.input, styles.detailsInput, styles.whiteText]}

        multiline
      />

      {/* File upload button */}
      <View style={styles.section}>
        <Button title="แนบไฟล์" onPress={() => {}} color="#CA9CAC"/>
      </View>

      {/* Submit button */}
      <View style={styles.section}>
        <Button title="ส่งรายงาน" onPress={() => console.log('Submitted')} color="#42bd41" />
      </View>

      {/* Back button */}
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
    backgroundColor: '#e7eaf6',
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
    marginBottom: 10,
  },
  detailsInput: {
    height: 100,
    textAlignVertical: 'top',
    backgroundColor: '#b39ddb',
    width: 370, // Set the desired width
    height: 220,
  },
  section: {
    marginTop: 10,
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
    color: '#e7eaf6',
  },
  backButton: {
    position: 'absolute',
    top: 19,
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

export default EmergencyReportScreen4;
