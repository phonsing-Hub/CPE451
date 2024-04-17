import { View, Text,Button } from 'react-native'
import React from 'react'

const Security = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Security</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Security