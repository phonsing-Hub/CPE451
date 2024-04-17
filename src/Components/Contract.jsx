import { View, Text, Button } from 'react-native'
import React from 'react'

const Contract = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Contract</Text>
     <Button title="Go back" onPress={() => navigation.goBack()} />
   </View>
  )
}

export default Contract