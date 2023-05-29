import React from "react";
import styled from "styled-components/native";

type StyledTextProps = {
  children: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  marginRgt?: string;
  marginLft?: string;
  marginTop?: string;
  marginBtm?: string;
};

const StyledText = styled.Text<StyledTextProps>`
  color: ${(color: StyledTextProps) => color.color || "black"};
  font-size: ${(fontSize: StyledTextProps) => fontSize.fontSize || "16px"};
  font-weight: ${(fontWeight: StyledTextProps) =>
    fontWeight.fontWeight || "normal"};
  margin-top: ${(marginTop: StyledTextProps) => marginTop.marginTop};
  margin-bottom: ${(marginBtm: StyledTextProps) => marginBtm.marginBtm};
  margin-left: ${(marginLft: StyledTextProps) => marginLft.marginLft};
  margin-right: ${(marginRgt: StyledTextProps) => marginRgt.marginRgt};
`;

const CustomText: React.FC<StyledTextProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
  marginRgt,
  marginLft,
  marginTop,
  marginBtm,
}) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginRgt={marginRgt}
      marginLft={marginLft}
      marginTop={marginTop}
      marginBtm={marginBtm}
    >
      {children}
    </StyledText>
  );
};

export default CustomText;
