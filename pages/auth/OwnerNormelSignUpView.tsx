import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthButton from '../../components/Auth/AuthButton'
import AuthLogo from '../../components/Auth/AuthLogo'
import CommonInput from '../../components/CommonInput'
import { type SignUpScreenNavigationProps } from './SignUpView'

export default function OwnerNormalSignUpView () {
  const navigate = useNavigation<SignUpScreenNavigationProps>()
  const [emailId, setEmailId] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const nextNavigat = () => {
    navigate.navigate('LEICodeView', {
      email: emailId,
      password: passwordValue
    })
  }

  return (
    <View style={styles.container}>
      <AuthLogo />
      <View style={styles.inputContainer}>
        <View>
          <CommonInput
            width={'100%'}
            height={'54px'}
            value={emailId}
            backgroundColor={'#EEEEEE'}
            placeholder={'이메일을 입력해 주세요'}
            changeFunc={setEmailId}
            label={'이메일'}
            type={'text'}
          />
        </View>
        <View style={styles.passwordContainer}>
          <CommonInput
            width={'100%'}
            height={'54px'}
            value={passwordValue}
            backgroundColor={'#EEEEEE'}
            placeholder={'비밀번호를 입력해 주세요'}
            changeFunc={setPasswordValue}
            label={'비밀번호'}
            type={'password'}
          />
        </View>
        <AuthButton
          children="다음 단계로"
          pressFunction={() => { nextNavigat() }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputContainer: {
    height: 192,
    width: '90%'
  },
  passwordContainer: {
    marginTop: 20,
    marginBottom: 40
  }
})
