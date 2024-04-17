import {StyleSheet,View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Text } from '@rneui/themed';
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'



const Bills = ({navigation}) => {
  return (
    <SafeAreaView style={styles.contialner}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Entypo name='chevron-left' size={40}/>
      </TouchableOpacity>
      </View>
      <View style={styles.headerName}>
        <Text h3>ค่าห้อง</Text>
      </View>
      <TouchableOpacity style={styles.bill} onPress={() => navigation.navigate('BillCal')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text h4>บิลค่าห้อง ค่าน้ำ ค่าไฟ</Text>
        </View>
        <Entypo name='chevron-right' size={40}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bill} onPress={() => navigation.navigate('BillHistory')}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text h4>ประวัติการทำรายการ</Text>
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
    backgroundColor: '#fefefe',
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'space-between',
    paddingRight:10,
    paddingLeft:10
  },
  chat_img:{
    width:75,
    height:75
  }
})