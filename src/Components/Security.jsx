import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'



const Security = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [details, setDetails] = useState('');
  const [fileUri, setFileUri] = useState('');

  const handleEmergencyReport = () => {
    navigation.navigate('EmergencyReportScreen', {
      date,
      roomNumber,
      details,
      fileUri,
    });
  };

  const handleEmergencyReport2 = () => {
    navigation.navigate('EmergencyReportScreen2', {
      date,
      roomNumber,
      details,
      fileUri,
    });
  };

  const handleEmergencyReport3 = () => {
    navigation.navigate('EmergencyReportScreen3', {
      date,
      roomNumber,
      details,
      fileUri,
    });
  };

  const handleEmergencyReport4 = () => {
    navigation.navigate('EmergencyReportScreen4', {
      date,
      roomNumber,
      details,
      fileUri,
    });
  };

  const handleEmergencyReport5 = () => {
    navigation.navigate('EmergencyReportScreen5', {
      date,
      roomNumber,
      details,
      fileUri,
    });
  };

  return (
    <SafeAreaView style={{backgroundColor:"#e7eaf6", flex: 1}}>
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>ความปลอดภัย</Text>
      </View>

      <View style={[styles.section, styles.backButton]}>
        <View style={styles.circularButton}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <AntDesign name='left' size={36} color={'#a2a8d3'}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{backgroundColor:'#a2a8d3',borderRadius: 15,width:'100%',height:300,justifyContent:'center'}}> 
    <View style={{flexDirection: 'row',justifyContent:'space-around',marginBottom:10}}>
      <TouchableOpacity onPress={handleEmergencyReport} style ={{backgroundColor:'#fefefe',width:100,height:100, justifyContent:'center',alignItems:'center',borderRadius: 15,}}>
      <AntDesign name='warning' size={36} color={'#a2a8d3'} />
      <Text style={{fontSize:16,color:'#000000'}}>แจ้งเหตุด่วน</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEmergencyReport2} style ={{backgroundColor:'#fefefe',width:100,height:100, justifyContent:'center',alignItems:'center',borderRadius: 15,}}>
      <AntDesign name='team' size={36} color={'#a2a8d3'} />
      <Text style={{fontSize:16,color:'#000000'}}>   แจ้งเหตุทะเลาะวิวาท</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEmergencyReport3} style ={{backgroundColor:'#fefefe',width:100,height:100, justifyContent:'center',alignItems:'center',borderRadius: 15,}}>
      <AntDesign name='user' size={36} color={'#a2a8d3'} />
      <Text style={{fontSize:16,color:'#000000'}}>  บุคคลแปลกหน้าเข้าหอพัก</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row',justifyContent:'space-around',marginBottom:10}}>
      <TouchableOpacity onPress={handleEmergencyReport4} style ={{backgroundColor:'#fefefe',width:100,height:100, justifyContent:'center',alignItems:'center',borderRadius: 15,}}>
      <AntDesign name='profile' size={36} color={'#a2a8d3'} />
      <Text style={{fontSize:16,color:'#000000'}}>  รายงานพฤติกรรม</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEmergencyReport5} style ={{backgroundColor:'#fefefe',width:100,height:100, justifyContent:'center',alignItems:'center',borderRadius: 15,}}>
      <AntDesign name='phone' size={36} color={'#a2a8d3'} />
      <Text style={{fontSize:16,color:'#000000'}}>โทรด่วน</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e7eaf6', // Background color
  },
  headerBackground: {
    backgroundColor: '#fefefe',
    borderRadius: 0,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: 370, // Set the desired width
    height: 70,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000', // Header text color
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
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Security;
