import { TextInput, View } from "react-native";
import styled from "styled-components/native";

interface InputProps {
  width: string;
  height: string;
  value: string;
  backgroundColor: string;
  placeholder: string;
  changeFunc: React.Dispatch<React.SetStateAction<string>>;
}

const CustomInput = styled.TextInput<InputProps>`
  width: ${(props: InputProps) => props.width};
  height: ${(props: InputProps) => props.height};
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function CommonInput(props: InputProps) {
  return (
    <View>
      <CustomInput
        width={props.width}
        height={props.height}
        value={props.value}
        onChangeText={(text: string) => {
          props.changeFunc(text);
        }}
        backgroundColor={props.backgroundColor}
        placeholder={props.placeholder}
      />
    </View>
  );
}
