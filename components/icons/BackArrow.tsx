import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

const BackArrow = ({children}: {children?: React.ReactNode}) => {
  const {goBack} = useNavigation<any>()
  return (
    <TouchableOpacity onPress={() => goBack()} style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
      <Fontisto name='angle-left' size={20} />
      {children}
    </TouchableOpacity>
  )
}

export default BackArrow