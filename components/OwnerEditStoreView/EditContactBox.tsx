import { StyleSheet, View } from 'react-native'
import CommonInput from '../CommonInput'
import CustomText from '../CustomText'

interface EditContactBoxProps {
  setSnsValue: React.Dispatch<React.SetStateAction<string>>
  setStoreNumber: React.Dispatch<React.SetStateAction<string>>
  snsValue: string
  storeNumber: string
}

export default function EditContactBox (props: EditContactBoxProps) {
  return (
    <View style={styles.container}>
      <View>
        <CustomText children="번호 및 SNS 등록" marginLft="20px" />
      </View>
      <View style={styles.inputContainer}>
        <CommonInput
          label="업체번호"
          type="text"
          width="80%"
          height="36px"
          changeFunc={props.setStoreNumber}
          value={props.storeNumber}
          backgroundColor={'white'}
          placeholder={'전화번호를 입력하세요'}
          border={'1px solid #CACACA'}
        />
        <View style={styles.SNSContainer}>
          <CommonInput
            label="SNS"
            type="text"
            width="80%"
            height="36px"
            changeFunc={props.setSnsValue}
            value={props.snsValue}
            backgroundColor={'white'}
            placeholder={'인스타그램 ID를 입력해주세요'}
            border={'1px solid #CACACA'}
          />
          <CustomText
            children="Instargram은 이메일이 아닌 @ 이후에 ID를 입력해주세요!"
            color="#949494"
            fontSize="12px"
            marginTop="4px"
            marginLft="2px"
          />
        </View>
      </View>
      <View style={styles.submitButtonContainer}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: 'center'
  },
  inputContainer: {
    width: '100%',
    paddingLeft: 20,
    marginTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    paddingBottom: 20
  },
  SNSContainer: { marginTop: 10 },
  submitButtonContainer: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
