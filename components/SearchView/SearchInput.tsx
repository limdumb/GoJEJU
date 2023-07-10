import { Alert } from 'react-native'
import SearchIcon from 'react-native-vector-icons/Fontisto'
import styled from 'styled-components/native'

interface SearchProps {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  searchState: boolean
  submitFunction: () => {}
}

const SearchTextInput = styled.TextInput`
  width: 85%;
  height: 100%;
  margin-left: 15px;
  font-size: 16px;
`

const SearchTextContainer = styled.View<{ searchState: boolean }>`
  background-color: ${(props) => (props.searchState ? '#ffffff' : '#EDEDED')};
  width: 90%;
  height: 45px;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  padding-left: 12px;
`

export default function SearchInput (props: SearchProps) {
  return (
    <SearchTextContainer searchState={props.searchState}>
      <SearchIcon
        name="search"
        size={30}
        color="#898989"
        onPress={() => {
          if (props.searchValue.length !== 0) {
            props.submitFunction()
          } else {
            Alert.alert('검색어를 입력 해주세요!')
          }
        }}
      />
      <SearchTextInput
        value={props.searchValue}
        onChangeText={props.setSearchValue}
        placeholder={'검색어를 입력하세요'}
      />
    </SearchTextContainer>
  )
}
