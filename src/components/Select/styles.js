import styled from "styled-components";
import { colors } from "../../static/colors";

export const SelectStyled = styled.select`
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 16px 0px rgba(51, 51, 51, 0.08);
  border: none;
  box-sizing: border-box;
  outline: none;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: ${colors.darkGrey};
  line-height: 128%;
`;

export const SelectContainer = styled.div`
  width: 10.5em;
  margin-bottom: 32px;
`;

export const SelectHeader = styled.div`
  margin-bottom: 0.2em;
  position: relative;
  width: 10.5em;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ isError }) => (isError ? colors.red : colors.darkGrey)};
  box-sizing: border-box;
  outline: none;
  color: ${colors.darkGrey};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 128%;
`;

export const SelectListContainer = styled.div`
  color: ${colors.darkGrey}
`;

export const SelectList = styled.ul`
  position: absolute;
  width: 10.5em;
  padding: 0;
  margin: 0;
  padding: 0 1em;
  background: ${colors.white};
  border: 1px solid ${colors.darkGrey};
  box-sizing: border-box;
  font-size: 16px;
  &:first-child {
    padding-top: 0.8em;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${colors.lightGrey};
  margin-bottom: 0.8em;
`;
