import React from 'react';
import { View,StyleSheet,SafeAreaView,TouchableOpacity,FlatList } from 'react-native';
import { Text } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';

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
