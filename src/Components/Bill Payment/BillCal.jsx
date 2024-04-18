import React from 'react';
import { View,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import BillRoom from './BillRoom';
import { Text } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';

const BillCal = ({navigation}) => {
  // กำหนดค่าของค่าใช้จ่ายต่าง ๆ
  const roomRent = 4500; 
  const waterBill = 110; 
  const electricityBill = 1956; 

  return (
    <SafeAreaView style={styles.contialner}>
    <View style={styles.header}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Entypo name='chevron-left' size={40}/>
    </TouchableOpacity>
    </View>
    <Text style={styles.heading}>บิลรวมค่าห้อง</Text>
    <View style={styles.container}>
      {/* เรียกใช้งาน BillTemplate และส่งค่าของค่าใช้จ่ายไปเป็น prop */}
      <BillRoom
        roomRent={roomRent}
        waterBill={waterBill}
        electricityBill={electricityBill}
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
