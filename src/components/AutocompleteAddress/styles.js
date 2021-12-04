import styled from "styled-components";
import { colors } from "../../static/colors";

export const WrapperList = styled.div`
  position: absolute;
  width: 100%;
`;
export const AutoCompleteTextStyled = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${colors.darkGrey};
  font-family: "Roboto", sans-serif;
  margin-bottom: 32px;
  ul {
    list-style: none;
    text-align: left;
    margin-top: 0.2em;
    padding: 0;
    border: 1px solid ${colors.darkGrey};
    /* border-top: none; */
  }
  /* ul::before {
    content: "";
  } */
  li {
    padding: 10px 5px;
    cursor: pointer;
  }

  li:hover {
    text-decoration: underline;
    background-color: rgba(128, 128, 128, 0.2);
  }
`;
