import React from 'react'
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import { Text } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Repair = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>แจ้งซ่อม</Text>
      </View>

      <View style={[styles.section1, styles.backButton]}>
        <View style={styles.circularButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name='left' size={36} color={'#CA9CAC'} />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.label}>         </Text>
        <TextInput
          style={styles.input}
          placeholder="            แจ้งซ่อมบำรุงของหอพัก"

        />

        <Text style={styles.label}>         </Text>
        <TextInput
          style={styles.input}
          placeholder="            จอง วัน/เดือน ซ่อมบำรุง"
        />



      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../Images/air.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.section}>
        <Button title="Report" onPress={() => console.log('Report success')} color="#78A3D4" />
      </View>









    </SafeAreaView>



  )
}
export default Repair

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e7eaf6',
  },
  label: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#b39ddb',
    borderColor: '#b39ddb',
    borderRadius: 15,
    padding: 10,
  },
  detailsInput: {
    textAlignVertical: 'top',
    borderColor: '#CA9CAC',
    backgroundColor: '#CA9CAC',
    width: 370, // Set the desired width
    height: 220,
  },

  section1: {
    marginBottom: 20
  },


  image: {
    width: 390,
    height: 300, borderRadius: 10, right: 10,
    marginTop: 20
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
    color: '#f2eddd', // Header text color
  },
  section: {
    marginBottom: 20, marginTop: 20
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