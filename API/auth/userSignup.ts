import AsyncStorage from '@react-native-async-storage/async-storage'
import { type AuthResponseType } from './loginLogic'

interface UserSignupProps {
  email: string
  password: string
}

export default async function userSignup (props: UserSignupProps) {
  const request = { email: props.email, password: props.password }
  try {
    const response: AuthResponseType = {
      accessToken: 'berer',
      refreshToken: 'berer',
      userId: 2,
      userType: 'user'
    }
    // 추후 회원가입 Post 로직 추가 예정
  } catch (err) {
    console.error(err)
  }
}
