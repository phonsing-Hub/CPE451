import React from 'react';
import { View, Text, StyleSheet, TextInput, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Hire = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>ข้อมูลการคืนห้องพัก</Text>
      </View>
      <View style={[styles.section, styles.backButton]}>
        <View style={styles.circularButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <AntDesign name='left' size={36} color={'#CA9CAC'}/>
          </TouchableOpacity>     
        </View>
      </View>

    
      <View style={styles.pinkBackground}>
        
        <Text style={[styles.label, { color: '#ffffff' }]}>วันที่ออก</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="xx/xx/25xx" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>รหัสห้องพัก</Text>
        
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="รหัสห้องพัก" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>ชื่อ-สกุล</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="ชื่อ-สกุล" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>มิเตอร์ไฟ</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="มิเตอร์ไฟ" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>มิเตอร์น้ำ</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="มิเตอร์น้ำ" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>ค่าบริการส่วนกลาง</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="ค่าบริการส่วนกลาง" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>ค่าปรับ</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="ค่าปรับ" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>เงินมัดจำ</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="เงินมัดจำ" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>รวมเป็นเงิน</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="รวมเป็นเงิน" placeholderTextColor="#CA9CAC" />
        </View>

      </View>

      <View style={styles.buttonSection}>
        <Button title="หมายเหตุ" onPress={() => {/* Add functionality */}} color="#ff7043" />
        <Button title="สถานะการชำระ" onPress={() => console.log('Submitted')} color="#26c6da" />
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

export default Hire;
