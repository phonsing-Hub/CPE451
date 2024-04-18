import React from 'react';
import { View, Text, StyleSheet, TextInput, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Room = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>ข้อมูลห้องพัก</Text>
      </View>

      {/* Other text inputs go here */}

      {/* Additional background with pink color */}
      <View style={styles.pinkBackground}>
        <Text style={[styles.label, { color: '#ffffff' }]}>ชั้น-รหัสห้องพัก</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="0x-0001" placeholderTextColor="#CA9CAC" />
        </View>
        <Text style={[styles.label, { color: '#ffffff' }]}>ประเภทห้อง</Text>
        <View style={[styles.inputContainer, { backgroundColor: '#f2eddd' }]}>
          <TextInput style={styles.input} placeholder="ประเภทห้อง" placeholderTextColor="#CA9CAC" />
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
        <View style={styles.whiteBackground}>
        <Text style={[styles.label, { color: '#a2a8d3' }]}>ทรัพย์สิน                    จำนวน             ราคา</Text>
        <View style={[styles.inputCont, { backgroundColor: '#CA9CAC' }]}>
          <TextInput style={styles.input} placeholder="เตียงนอน                         1                    2000" placeholderTextColor="#f2eddd" />
        </View>
        <View style={[styles.inputCont, { backgroundColor: '#CA9CAC' }]}>
          <TextInput style={styles.input} placeholder="ตู้เสื้อผ้า                           1                    1550" placeholderTextColor="#f2eddd" />
        </View>
        <View style={[styles.inputCont, { backgroundColor: '#CA9CAC' }]}>
          <TextInput style={styles.input} placeholder="TV                                   1                    8500" placeholderTextColor="#f2eddd" />
        </View>
      </View>
      
      

      </View>

      <View style={styles.buttonSection}>
        <Button title="แก้ไข" onPress={() => {/* Add functionality */}} color="#ff7043" />
        <Button title="บันทึกข้อมูล" onPress={() => console.log('Submitted')} color="#26c6da" />
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
    backgroundColor: '#f2eddd',
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
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
  whiteBackground: {
    backgroundColor: '#f2eddd', // Set to pink color
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: '90%', // Set width to 100% of parent container
    height: '38%', // Set height to 85% of parent container
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
  inputCont: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f2eddd', // Set border color to white
    borderRadius: 15,
    padding: 1,
    marginBottom: 15,
  },
});

export default Room;
