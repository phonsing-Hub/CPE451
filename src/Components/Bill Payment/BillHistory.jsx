import React from 'react';
import { View,StyleSheet,SafeAreaView,TouchableOpacity,FlatList } from 'react-native';
import { Text } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'

const BillHistory = ({navigation}) => {
  
  const billData = [
    { id: '1', roomNumber: '101', month: '30 มกราคม 2024', roomRent: 3500, waterBill: 100, electricityBill: 1850, total: 5450 },
    { id: '2', roomNumber: '101', month: '28 กุมภาพันธ์ 2024', roomRent: 3500, waterBill: 80, electricityBill: 1940, total: 5520},
    { id: '3', roomNumber: '101', month: '30 มีนาคม 2024', roomRent: 3500, waterBill: 100, electricityBill: 1765, total: 5365},
    { id: '4', roomNumber: '101', month: '30 เมษายน 2024', roomRent: 3500, waterBill: 90, electricityBill: 1584, total: 5174 },
    { id: '5', roomNumber: '101', month: '30 พฤษภาคม 2024', roomRent: 3500, waterBill: 110, electricityBill: 1698 ,total: 5308},
    { id: '6', roomNumber: '101', month: '30 มิถุนายน 2024', roomRent: 3500, waterBill: 70, electricityBill: 1880, total: 5450},
  ];

  // ฟังก์ชันสำหรับแสดงรายการบิลแต่ละรายการ
  const renderBillItem = ({ item }) => (
    <View style={styles.billItem}>
      <Text style={styles.billRoom}>หมายเลขห้อง : {item.roomNumber}</Text>
      <Text style={styles.billMonth}>วัน เดือน ปี : {item.month}</Text>
      <Text>ค่าห้อง: {item.roomRent} บาท</Text>
      <Text>ค่าน้ำ: {item.waterBill} บาท</Text>
      <Text>ค่าไฟ: {item.electricityBill} บาท</Text>
      <Text>รวมทั้งหมด: {item.total} บาท</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>ประวัติการทำรายการ</Text>
      </View>
      <View style={[styles.section, styles.backButton]}>
        <View style={styles.circularButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <AntDesign name='left' size={36} color={'#CA9CAC'}/>
          </TouchableOpacity>     
        </View>
      </View>
      
        <FlatList
            data={billData}
            renderItem={renderBillItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  billItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  billRoom: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  billMonth: {
    fontSize: 16,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2eddd', // Background color
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
    color: '#f2eddd', // Header text color
  },
  section: {
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 30,
  },
  circularButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2eddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  SlipUp: {
    marginTop: 45,
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius:'20',
    alignItems: 'center',
    marginBottom: 0,
  },
  image: {
    width: 250,
    height: 350,
    borderRadius: 10,
  },
  backButton: {
    position: 'absolute',
    top: 30,
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

export default BillHistory;
