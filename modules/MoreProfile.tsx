import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { constant } from '../utils/constants'
import AntDesign from '@expo/vector-icons/AntDesign'
import Octicons from '@expo/vector-icons/Octicons'

const MoreProfile = () => {
  return (
    <TouchableOpacity activeOpacity={0.6}
				style={{
					paddingVertical: 8,
					flexDirection: "row",
					gap: 16,
					alignItems: "center",
				}}
			>
				<View
					style={{
						width: 50,
						height: 50,
						backgroundColor: constant.grayED,
						borderRadius: 25,
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 8,
					}}
				>
					<AntDesign name="user" size={24} />
				</View>
				<View style={{ paddingTop: 4, flex: 1 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "500",
							marginBottom: 4,
						}}
					>
						Dang Xuan Nam
					</Text>
					<Text
						style={{ color: constant.grayAD, flex: 1 }}
						numberOfLines={1}
					>
						namdang.contact@gmail.com
					</Text>
				</View>
				<Octicons name="chevron-right" size={24} />
			</TouchableOpacity>
  )
}

export default MoreProfile