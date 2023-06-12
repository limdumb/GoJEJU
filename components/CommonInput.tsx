import { View } from "react-native";
import styled from "styled-components/native";
import CustomText from "./CustomText";

interface InputProps {
  width: string;
  height: string;
  value: string;
  backgroundColor: string;
  placeholder: string;
}

interface CommonInputProps extends InputProps {
  changeFunc: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  type: "text" | "password";
}

const CustomInput = styled.TextInput<InputProps>`
  width: ${(props: InputProps) => props.width};
  height: ${(props: InputProps) => props.height};
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function CommonInput(props: CommonInputProps) {
  return (
    <View>
      {props.label?.length !== undefined ? (
        <CustomText
          children={props.label}
          marginBtm={"8px"}
          marginLft={"3px"}
          fontWeight={"600"}
        />
      ) : null}
      <CustomInput
        width={props.width}
        height={props.height}
        value={props.value}
        onChangeText={(text: string) => {
          props.changeFunc(text);
        }}
        backgroundColor={props.backgroundColor}
        placeholder={props.placeholder}
        secureTextEntry={props.type === "password" ? true : false}
      />
    </View>
  );
}
