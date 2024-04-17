import React from 'react';
import { View,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import BillRoom from './BillRoom';
import { Text } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';

const BillCal = ({navigation}) => {
  // กำหนดค่าของค่าใช้จ่ายต่าง ๆ
  const roomRent = 5000; // เช่น ค่าเช่าห้อง 5000 บาท
  const waterBill = 200; // เช่น ค่าน้ำ 200 บาท
  const electricityBill = 300; // เช่น ค่าไฟ 300 บาท

  return (
    <SafeAreaView style={styles.contialner}>
    <View style={styles.header}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Entypo name='chevron-left' size={40}/>
    </TouchableOpacity>
    </View>
    <Text style={styles.heading}>Bill Summary</Text>
    <View style={styles.container}>
      {/* เรียกใช้งาน BillTemplate และส่งค่าของค่าใช้จ่ายไปเป็น prop */}
      <BillRoom
        roomRent={3500}
        waterBill={100}
        electricityBill={1850}
      />
    </View>
    
 </SafeAreaView>
)
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default BillCal;
