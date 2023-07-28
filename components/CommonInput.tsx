import { View } from "react-native";
import styled from "styled-components/native";
import CustomText from "./CustomText";

interface InputProps {
  width: string;
  height: string;
  value: string;
  backgroundColor: string;
  placeholder: string;
  border?: string;
  multiline?: boolean;
  paddingTop?: string;
  paddingBtm?: string;
  fontsize?: string;
}

interface CommonInputProps extends InputProps {
  changeFunc: Function;
  label?: string;
  type: "text" | "password";
}

const CustomInput = styled.TextInput<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontsize};
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: ${(props) => (props.paddingBtm ? props.paddingBtm : "0px")};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0px")};
  border: ${(props) => (props.border ? props.border : "0px")};
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
        border={props.border}
        onChangeText={(text: string) => {
          props.changeFunc(text);
        }}
        fontsize={props.fontsize}
        backgroundColor={props.backgroundColor}
        placeholder={props.placeholder}
        secureTextEntry={props.type === "password"}
        paddingBtm={props.paddingBtm}
        paddingTop={props.paddingTop}
        multiline={props.multiline !== undefined ? props.multiline : false}
      />
    </View>
  );
}
