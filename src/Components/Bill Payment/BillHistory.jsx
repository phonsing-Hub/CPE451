import React from 'react';
import { View,StyleSheet,SafeAreaView,TouchableOpacity,FlatList } from 'react-native';
import { Text } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';

const BillHistory = ({navigation}) => {
  // ข้อมูลตัวอย่างของบิล
  const billData = [
    { id: '1', roomNumber: '101', month: 'มกราคม 2024', roomRent: 3000, waterBill: 500, electricityBill: 700 },
    { id: '2', roomNumber: '101', month: 'กุมภาพันธ์ 2024', roomRent: 3000, waterBill: 450, electricityBill: 680 },
    { id: '3', roomNumber: '101', month: 'มีนาคม 2024', roomRent: 3000, waterBill: 480, electricityBill: 720 },
    { id: '4', roomNumber: '101', month: 'เมษายน 2024', roomRent: 3000, waterBill: 520, electricityBill: 690 },
    { id: '5', roomNumber: '101', month: 'พฤษภาคม 2024', roomRent: 3000, waterBill: 490, electricityBill: 710 },
    { id: '6', roomNumber: '101', month: 'มิถุนายน 2024', roomRent: 3000, waterBill: 510, electricityBill: 730 },
  ];

  // ฟังก์ชันสำหรับแสดงรายการบิลแต่ละรายการ
  const renderBillItem = ({ item }) => (
    <View style={styles.billItem}>
      <Text style={styles.billRoom}>ห้อง: {item.roomNumber}</Text>
      <Text style={styles.billMonth}>เดือน: {item.month}</Text>
      <Text>ค่าห้อง: {item.roomRent} บาท</Text>
      <Text>ค่าน้ำ: {item.waterBill} บาท</Text>
      <Text>ค่าไฟ: {item.electricityBill} บาท</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.contialner}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Entypo name='chevron-left' size={40}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.title}>Bill History</Text>
        <FlatList
            data={billData}
            renderItem={renderBillItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  contialner:{
    flex:1,
    backgroundColor: '#e7eaf6'
  },
  header:{
    flexDirection: 'row',
    padding:10,
    zIndex:99
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
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
});

export default BillHistory;
