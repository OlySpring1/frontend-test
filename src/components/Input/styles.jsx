import styled from "styled-components";
import { colors } from "../../static/colors";

export const InputStyled = styled.input`
  position: relative;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ isError }) => (isError ? colors.red : colors.darkGrey)};
  box-sizing: border-box;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: ${colors.darkGrey};
  line-height: 128%;
`;

export const WrapperInput = styled.div`
  margin-bottom: 32px;
  position: relative;
`;
