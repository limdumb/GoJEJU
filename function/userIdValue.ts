import AsyncStorage from '@react-native-async-storage/async-storage'

export const userIdValue = async () => {
  try {
    const userIdValue = await AsyncStorage.getItem('userId')
    if (userIdValue !== null) {
      return Number(userIdValue)
    } else {
      return null
    }
  } catch (err) {
    console.error(err)
    return null
  }
}
