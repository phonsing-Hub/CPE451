import {StyleSheet,View,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Text } from '@rneui/themed';
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const Service = ({navigation}) => {
  return (
    <SafeAreaView style={styles.contialner}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Entypo name='chevron-left' size={40}/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('Repair')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../Images/sevice.png')} style={styles.chat_img}/>
          <Text h4> ติดต่อแจ้งซ่อม</Text>
        </View>
        <Entypo name='chevron-right' size={40}/>
      </TouchableOpacity>



      <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('Clean')}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../Images/clean.jpg')} style={styles.chat_img}/>
          <Text h4> แจ้งทำความสะอาด</Text>
        </View>
        <Entypo name='chevron-right' size={40}/>
      </TouchableOpacity>
   </SafeAreaView>
  )
}

export default Service

const styles = StyleSheet.create({
  contialner:{
    flex:1,
    backgroundColor: '#FAF0E6'
  },
  header:{
    flexDirection: 'row',
    padding:10,
    zIndex:99
  },
  headerName:{
    width:'100%',
    position:'absolute',
    top: 70,
    justifyContent:'center',
    alignItems: 'center'
  },
  chat:{
    flexDirection: 'row',
    margin:10,
    backgroundColor: '#A19DCA',
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