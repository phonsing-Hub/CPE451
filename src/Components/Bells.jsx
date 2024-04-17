import { View, Text ,Button} from 'react-native'
import React from 'react'

const Bells = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Bells</Text>
     <Button title="Go back" onPress={() => navigation.goBack()} />
   </View>
  )
}

export default Bells