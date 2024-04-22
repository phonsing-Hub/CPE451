import React from 'react';
import { View,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import BillRoom from './BillRoom';
import { Text } from '@rneui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign'

const BillCal = ({navigation}) => {
  // กำหนดค่าของค่าใช้จ่ายต่าง ๆ
  const roomRent = 4500; 
  const waterBill = 110; 
  const electricityBill = 1956; 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>บิลรวมค่าห้อง</Text>
      </View>
      <View style={[styles.section, styles.backButton]}>
        <View style={styles.circularButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <AntDesign name='left' size={36} color={'#CA9CAC'}/>
          </TouchableOpacity>     
        </View>
      </View>

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

export default BillCal;
