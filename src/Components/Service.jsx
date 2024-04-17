import { View, Text, Button } from 'react-native'
import React from 'react'

const Service = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Service</Text>
     <Button title="Go back" onPress={() => navigation.goBack()} />
   </View>
  )
}

export default Service