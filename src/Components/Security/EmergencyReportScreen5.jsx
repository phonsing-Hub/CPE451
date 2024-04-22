import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EmergencyReportScreen = () => {
  const navigation = useNavigation();

  const callEmergencyNumber = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>โทรด่วน</Text>
      </View>

      {/* Submit button */}
      <View style={styles.section}>
        <Button
          title="191"
          onPress={() => callEmergencyNumber('191')}
          color="#b39ddb"
        ></Button>
      </View>

      {/* Submit button */}
      <View style={styles.section}>
        <Button
          title="1669"
          onPress={() => callEmergencyNumber('1669')}
          color="#b39ddb"
        />
      </View>

      <View style={[styles.section, styles.backButton]}>
        <View style={styles.circularButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={36} color={'#CA9CAC'} />
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
    backgroundColor: '#e7eaf6',
  },
  section: {
    marginTop: 20,
  },
  headerBackground: {
    backgroundColor: '#b39ddb',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: 370, // Set the desired width
    height: 63,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff', // Header text color
  },
  backButton: {
    position: 'absolute',
    top: 10,
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

export default EmergencyReportScreen;
