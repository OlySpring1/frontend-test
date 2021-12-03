import styled from "styled-components";
import { colors } from "../../static/colors";

export const ButtonStyle = styled.button`
  width: 100%;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 10px;
  text-align: center;
  border: none;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 128%;
  cursor: pointer;
`;
