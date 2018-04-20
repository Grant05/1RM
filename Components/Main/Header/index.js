import React from 'react'
import { View, Text, Image } from 'react-native'

// Image

// CSS
import styles from './styles'

const Header = () => (
  <View style={styles.container}>
    <Image
      style={{
        position: 'absolute',
        top: -50,
        left: 37,
        zIndex: -1
      }}
      // transform={[{ translateX: '30%' }]}
      source={require('../../Assets/barbell2.png')}
    />
    <Text style={styles.text}>One Rep Max</Text>
    <Text style={styles.text}>Calculator</Text>
  </View>
)

export default Header
