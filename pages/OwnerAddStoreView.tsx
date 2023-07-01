import { StyleSheet, View } from 'react-native'
import AddAdressBox from '../components/OwnerAddStoreView.tsx/AddAdressBox'
import StoreProfile from '../components/OwnerSettingView/StoreEditProfile'
import { emdNameArray } from '../function/emdNameArray'

export default function OwnerAddStoreView () {
  const emdInformation = emdNameArray()
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <StoreProfile imageUrl={''} name={''} storeDescription={''} />
      </View>
      <View style={styles.AddAdressWrapper}>
        <AddAdressBox emdArr={emdInformation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', alignItems: 'center' },
  profileContainer: {
    width: '100%',
    height: 160,
    borderBottomWidth: 1,
    borderBottomColor: '#C3C3C3'
  },
  AddAdressWrapper: {
    width: '100%',
    height: 438
  }
})
