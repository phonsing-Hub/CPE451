import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BillRoom  = ({ roomRent, waterBill, electricityBill }) => {
  const calculateTotal = () => {
    return roomRent + waterBill + electricityBill;
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Room Rent:</Text>
        <Text style={styles.value}>{roomRent} THB</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Water Bill:</Text>
        <Text style={styles.value}>{waterBill} THB</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Electricity Bill:</Text>
        <Text style={styles.value}>{electricityBill} THB</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>
          {calculateTotal()} THB
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BillRoom;
