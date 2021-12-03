import styled from "styled-components";
import { colors } from "../../static/colors";

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 16px 0px rgba(51, 51, 51, 0.08);
  border: 1px solid;
  border-color: ${({ isError }) => (isError ? colors.red : "transparent")};
  box-sizing: border-box;
  outline: none;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: "#1111117a";
  line-height: 128%;
`;

export const WrapperInput = styled.div`
  margin-bottom: 32px;
`;
