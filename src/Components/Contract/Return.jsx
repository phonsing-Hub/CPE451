import React from 'react';
import { View, Text, StyleSheet, TextInput, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Return = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>ข้อมูลการเช่า</Text>
      </View>
        <View style={[styles.section, styles.backButton]}>
        <View style={styles.circularButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <AntDesign name='left' size={36} color={'#CA9CAC'}/>
          </TouchableOpacity>     
        </View>
      </View>
      <View style={styles.pinkBackground}>
        
        <Text style={[styles.label, { color: '#ffffff' }]}>รหัสห้องพัก</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="0001" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>ชื่อ-สกุล</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="ชื่อ-สกุล" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>เบอร์โทร</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="0xxxxxxxxx" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>วัน/เดือน/ปีเกิด</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="วว/ดด/" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>ที่อยู่</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="ที่อยู่" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>ประเภทห้องพัก</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="ประเภทห้องพัก" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>ค่าเช่า</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="ค่าเช่า" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>วันที่เข้าพัก</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="เวันที่เข้าพัก" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>สถานะการเช่า</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="สถานะการเช่า" placeholderTextColor="#CA9CAC" />
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button title="หมายเหตุ" onPress={() => {/* Add functionality */}} color="#ff7043" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2eddd',
  },
  label: {
    fontSize: 13,
    marginBottom: 1,
  },
  input: {
    flex: 1,
    color: '#f2eddd', // Set text color to white
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f2eddd', // Set border color to white
    borderRadius: 15,
    padding: 1,
    marginBottom: 1,
  },
  headerBackground: {
    backgroundColor: '#a2a8d3',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: 370, // Set the desired width
    height: 70,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f2eddd',
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 30,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 15,
  },
  pinkBackground: {
    backgroundColor: '#CA9CAC', // Set to pink color
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '100%', // Set width to 100% of parent container
    height: '85%', // Set height to 85% of parent container
    alignSelf: 'center', // Center horizontally
  },
  detailsInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  circularButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2eddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Return;
