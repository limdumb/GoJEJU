import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

interface SpinnerProps {
  size?: 'small' | 'large'
  color?: string
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'large', color = '#000000' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Spinner
