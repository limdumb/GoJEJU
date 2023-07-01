import { StyleSheet, Text, View } from 'react-native'

export default function AuthLogo () {
  return (
    <View style={styles.logoSection}>
      <Text style={styles.logo}>Watching</Text>
      <Text style={styles.logo}>☁️ JeJu</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: { fontSize: 60, color: '#0F4C81' },
  logoSection: {
    width: '100%',
    height: 360,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
