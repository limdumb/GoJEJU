import { Text, View } from "react-native";
import styled from "styled-components/native";

interface AuthBoxProps {
  platform: "kakao" | "google";
}

const test = styled.View<AuthBoxProps>`
  background-color: ${(props)=> props.platform};
`;

export default function AuthBox(props: AuthBoxProps) {
  return (
    <View>
      <Text>하이</Text>
    </View>
  );
}
