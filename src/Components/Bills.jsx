import {StyleSheet,View, Image ,SafeAreaView, TouchableOpacity } from 'react-native'
import { Text } from '@rneui/themed';
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'



const Bills = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headerBackground}>
      <Text style={styles.headerText}>บิลรายเดือน</Text>
    </View>
    <View style={[styles.section, styles.backButton]}>
      <View style={styles.circularButton}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <AntDesign name='left' size={36} color={'#CA9CAC'}/>
        </TouchableOpacity>     
      </View>
    </View>

      <TouchableOpacity style={styles.bill} onPress={() => navigation.navigate('BillCal')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../Images/Billroom.png')} style={styles.chat_img}/>
          <Text h4>  บิลค่าห้อง ค่าน้ำ ค่าไฟ</Text>
        </View>
        <Entypo name='chevron-right' size={40}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bill} onPress={() => navigation.navigate('BillHistory')}>
      <Image source={require('../Images/History.png')} style={styles.chat_img}/>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text h4>   ประวัติการทำรายการ</Text>
        </View>
        <Entypo name='chevron-right' size={40}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bill} onPress={() => navigation.navigate('UploadSlip')}>
      <Image source={require('../Images/upload.png')} style={styles.chat_img}/>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text h4>   อัปโหลดสลิป</Text>
        </View>
        <Entypo name='chevron-right' size={40}/>
      </TouchableOpacity>
   </SafeAreaView>
  )
}

export default Bills

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
  headerName:{
    width:'100%',
    position:'absolute',
    top: 10,
    justifyContent:'center',
    alignItems: 'center'
  },
  bill:{
    flexDirection: 'row',
    margin:20,
    backgroundColor: '#a2a8d3',
    height: 100,
    width:350,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'space-between',
    paddingRight:80,
    paddingLeft:10
  },
  chat_img:{
    width:75,
    height:75
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
    width: 380, // Set the desired width
    height: 70,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f2eddd',
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
  }
})