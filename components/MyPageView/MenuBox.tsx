import { StyleSheet, View } from 'react-native'
import ReviewIcon from 'react-native-vector-icons/SimpleLineIcons'
import CafeIcon from 'react-native-vector-icons/Feather'
import SettingsIcon from 'react-native-vector-icons/Ionicons'

import CustomText from '../CustomText'
interface MenuProps {
  usage: 'review' | 'favorit' | 'ownerSetting'
}

export default function MenuBox (props: MenuProps) {
  const menuText = () => {
    if (props.usage === 'review') {
      return '내가 작성한 리뷰'
    } else if (props.usage === 'favorit') {
      return '내가 즐겨찾는 카페'
    } else if (props.usage === 'ownerSetting') {
      return '사장님 환경 설정'
    } else {
      return ''
    }
  }

  const Icons = () => {
    if (props.usage === 'review') {
      return <ReviewIcon size={20} name="speech" />
    } else if (props.usage === 'favorit') {
      return <CafeIcon size={20} name="coffee" />
    } else if (props.usage === 'ownerSetting') {
      return <SettingsIcon size={20} name="settings-outline"/>
    } else {
      return (<></>)
    }
  }

  return (
    <View style={styles.boxContainer}>
      <Icons />
      <CustomText children={menuText()} marginLft={'10px'} />
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#969090',
    marginTop: 20,
    paddingLeft: 17
  }
})
