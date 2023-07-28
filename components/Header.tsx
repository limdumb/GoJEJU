import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { type MainScreenNavigationProps } from '../pages/MainView'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useUserId } from '../customHook/useUserId'

const HeaderContainer = styled.View`
  height: 160px;
  width: 100%;
  background-color: white;
  border-bottom-width: 0.5px;
  border-bottom-color: "#949494";
`

interface TabType {
  tabName: string
  navScreen: 'MainView' | 'StoreSearchView' | 'StoreSuggestView'
}

export default function Header () {
  const navigate = useNavigation<MainScreenNavigationProps>()
  const userId = useUserId()
  const tabArray: TabType[] = [
    { tabName: '지도', navScreen: 'MainView' },
    { tabName: '카페검색', navScreen: 'StoreSearchView' },
    { tabName: '추천카페', navScreen: 'StoreSuggestView' }
  ]

  return (
    <HeaderContainer>
      <View style={styles.headerTopContainer}>
        <View style={styles.headerTop}>
          <Text>☁️Watching JEJU</Text>
          {userId === null
            ? (
            <Icon
              name="user-circle-o"
              size={30}
              onPress={() => {
                navigate.navigate('MyPageView')
              }}
            />
              )
            : (
            <View style={styles.authButtonContainer}>
              <TouchableOpacity onPress={() => { navigate.navigate('LoginView') }}>
                <Text>로그인</Text>
              </TouchableOpacity>
              <Text>/</Text>
              <TouchableOpacity onPress={() => { navigate.navigate("SignUpView") }}>
                <Text>회원가입</Text>
              </TouchableOpacity>
            </View>
              )}
        </View>
      </View>
      <View style={styles.tabContainer}>
        {tabArray.map((el) => {
          return (
            <Button
              key={el.tabName}
              color={'black'}
              title={el.tabName}
              onPress={() => {
                navigate.navigate(el.navScreen)
              }}
            />
          )
        })}
      </View>
    </HeaderContainer>
  )
}

const styles = StyleSheet.create({
  headerTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 48,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    height: '70%'
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '30%'
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 5,
    width: '100%'
  },
  authButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ç: {
    color: 'black',
    fontSize: 16
  }
})
