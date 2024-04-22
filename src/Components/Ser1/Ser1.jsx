import React from 'react'
import {StyleSheet,View,Image, SafeAreaView, TouchableOpacity,Button } from 'react-native';
import { Text } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';

const Repair =  ({navigation}) => {
    return(
<SafeAreaView style={styles.contialner}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Entypo name='chevron-left' size={40}/>
      </TouchableOpacity>
      </View>

       <Text style={styles.title}>ซ่อม-บำรุง demo</Text>
        

      
     <View style = {styles.buttonContainer}>
      <Button title="ประปา" onPress= {() =>{}} />
      <Button title='พัดลม' onPress={() => {}} />
      <Button title='ไฟฟ้า' onPress={() => {}} />
      <Button title='แอร์' onPress={() => {}} />
    </View>  
    
    <Text style={styles.title}>ทำความสะอาด demo</Text>

    <View style = {styles.buttonContainer}>
      <Button title="เปลี่ยนผ้าปูที่นอน" onPress= {() =>{}} />
      <Button title='ล้างแอร์' onPress={() => {}} />
      <Button title='ทำความสะอาดม่าน' onPress={() => {}} />
      
      
    </View>
    
   </SafeAreaView>
   

       
    )
}
export default Repair

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
      top: 70,
      justifyContent:'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    
  })