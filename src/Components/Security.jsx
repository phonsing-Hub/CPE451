import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const Security = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Entypo name='uninstall' size={36} color={'red'}/>
    </TouchableOpacity>
    


    </View>
  )
}

export default Security