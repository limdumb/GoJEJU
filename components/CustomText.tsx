import React, { ReactNode } from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";

type StyledTextProps = {
  children: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
};

const StyledText = styled.Text<StyledTextProps>`
  color: ${(color: StyledTextProps) => color || "black"};
  font-size: ${(fontSize: StyledTextProps) => fontSize || "16px"};
  font-weight: ${(fontWeight: StyledTextProps) => fontWeight || "normal"};
`;

type TextComponentProps = StyledTextProps & TextProps;

const TextComponent: React.FC<TextComponentProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
  ...rest
}) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default TextComponent;
