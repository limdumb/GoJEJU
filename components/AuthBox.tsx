import { Text, View } from "react-native";
import styled from "styled-components/native";
import CustomText from "./CustomText";

interface AuthBoxProps {
  platform: "kakao" | "google";
}

const AuthBoxContainer = styled.View<AuthBoxProps>`
  background-color: ${(props) =>
    props.platform === "kakao" ? "#FEE500" : "white"};
  width: 80%;
  height: 54px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;

export default function AuthBox(props: AuthBoxProps) {
  return (
    <AuthBoxContainer platform={props.platform}>
      <CustomText children="KaKao Login" fontSize="18px" fontWeight="600"/>
    </AuthBoxContainer>
  );
}
