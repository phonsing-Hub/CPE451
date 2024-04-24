import React from 'react'
import {StyleSheet,View,Image, SafeAreaView, TouchableOpacity,Button,TextInput} from 'react-native';
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

      <Text style={styles.title}>แจ้งซ่อม</Text>

     <View style = {styles.buttonContainer}>
     <Text style={styles.label}>                       </Text>
      <TextInput
        style={styles.input}
        placeholder="                                      แจ้งเหตุอุปกรในหรพักเสีย"
      />

     <Text style={styles.label}>         </Text>
      <TextInput
        style={styles.input}
        placeholder="                                       จอง วัน/เดือน ซ่อมบำรุง"
      />

      <Button title='ไฟฟ้า' onPress={() => {}} />
      
    </View>  

    <View style={styles.section}>
      <Button title="Report" onPress={() => console.log('Submitted')} color="#78A3D4" />
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