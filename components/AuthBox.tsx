import styled from "styled-components/native";
import CustomText from "./CustomText";

interface AuthBoxProps {
  role: "일반 사용자" | "점주 사용자"
  platform: "kakao" | "google" | "normer";
  type: "로그인" | "회원가입";
  // navigate: NavigationProp<RootStackParamList>
}

const AuthBoxContainer = styled.View<AuthBoxProps>`
  background-color: ${(props) =>
    props.platform === "kakao" ? "#FEE500" : "#FBFBFB"};
  height: 54px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
`;

export default function AuthBox(props: AuthBoxProps) {
  const signUpTitleValue = () => {
    if (props.platform === "kakao") {
      return "KaKao SignUp";
    } else if (props.platform === "google") {
      return "Google SignUp";
    } else {
      return "일반계정 SignUp";
    }
  };

  const loginTitleValue = () => {
    if (props.platform === "kakao") {
      return "KaKao Login";
    } else if (props.platform === "google") {
      return "Google Login";
    } else {
      return "일반계정 Login";
    }
  };

  return (
    <AuthBoxContainer role={props.role} type={props.type} platform={props.platform}>
      {/* 6월 3일 추후 로고 추가예정 */}
      <CustomText
        children={
          props.type === "회원가입" ? signUpTitleValue() : loginTitleValue()
        }
        fontSize="18px"
        fontWeight="600"
      />
    </AuthBoxContainer>
  );
}
