import {StyleSheet,View, Text, Image, Button,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'


const UploadSlip = ({navigation}) => {
  return (
    <SafeAreaView style={styles.contialner}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Entypo name='chevron-left' size={40}/>
      </TouchableOpacity>
      </View>
      <Text style={styles.heading}>อัปโหลดสลิป</Text>

      
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Images/upload.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      
      <View style={styles.SlipUp}>
        <Button title="แนบไฟล์สลิปการจ่ายเงิน" onPress={() => console.log('Upload File')} color="#00bfff"/>
      </View>

     
      <View style={styles.SlipUp}>
        <Button title="อัปโหลดสลิปการจ่ายเงิน" onPress={() => console.log('Upload Success')} color="#0000ff" />
      </View>


   </SafeAreaView>
  )
}

export default UploadSlip;

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
    top: 15,
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
  
})