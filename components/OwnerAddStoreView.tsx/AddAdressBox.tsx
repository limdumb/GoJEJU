import { StyleSheet, View } from 'react-native'
import CustomText from '../CustomText'

interface Props {
  emdArr: Array<{ name: string }>
}

export default function AddAdressBox (props: Props) {
  return (
    <View style={styles.container}>
      <CustomText marginLft="20px" children="주소 등록" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#C3C3C3',
    paddingTop: 10
  }
})
