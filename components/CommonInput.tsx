import { TextInput, View } from "react-native";
import styled from "styled-components/native";

interface InputProps {
  width: string;
  height: string;
  value: string;
  backgroundColor: string;
  changeFunc: React.Dispatch<React.SetStateAction<string>>;
}

const CustomInput = styled.TextInput<InputProps>`
  width: ${(props: InputProps) => props.width};
  height: ${(props: InputProps) => props.height};
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
      />
    </View>
  );
}
