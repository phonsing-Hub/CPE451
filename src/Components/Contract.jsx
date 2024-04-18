import React, { useState } from 'react';
import { View, Text, StyleSheet, Button ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Contract = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [details, setDetails] = useState('');
  const [fileUri, setFileUri] = useState('');

  const handleRoom = () => {
    navigation.navigate('Room', {
      date,
      roomNumber,
      details,
      fileUri,
    });
  };

  const handleReturn = () => {
    navigation.navigate('Return', {
      date,
      roomNumber,
      details,
      fileUri,
    });
  };

  const handleHire = () => {
    navigation.navigate('Hire', {
      date,
      roomNumber,
      details,
      fileUri,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>ข้อมูลการเช่าห้องพัก</Text>
      </View>
      <View style={[styles.section, styles.backButton]}>
        <View style={styles.circularButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <AntDesign name='left' size={36} color={'#CA9CAC'}/>
          </TouchableOpacity>     
        </View>
      </View>

     <View style={{backgroundColor:'#CA9CAC',borderRadius: 15,width:'100%',height:200,justifyContent:'center'}}> 
    <View style={{flexDirection: 'row',justifyContent:'space-around',marginBottom:10}}>
      <TouchableOpacity onPress={handleRoom} style ={{backgroundColor:'#f2eddd',width:100,height:100, justifyContent:'center',alignItems:'center',borderRadius: 15,}}>
      <AntDesign name='home' size={36} color={'#a2a8d3'} />
      <Text style={{fontSize:16,color:'#a2a8d3'}}>ข้อมูลห้องพัก</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReturn} style ={{backgroundColor:'#f2eddd',width:100,height:100, justifyContent:'center',alignItems:'center',borderRadius: 15,}}>
      <AntDesign name='contacts' size={36} color={'#a2a8d3'} />
      <Text style={{fontSize:16,color:'#a2a8d3'}}>ข้อมูลการเช่า</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHire} style ={{backgroundColor:'#f2eddd',width:100,height:100, justifyContent:'center',alignItems:'center',borderRadius: 15,}}>
      <AntDesign name='export2' size={36} color={'#a2a8d3'} />
      <Text style={{fontSize:16,color:'#a2a8d3'}}>ข้อมูลคืนห้อง</Text>
      </TouchableOpacity>
      

      </View>
      </View>
    </View>
  );
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
});

export default Contract;