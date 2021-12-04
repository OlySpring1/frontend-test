import styled from "styled-components";
import { colors } from "../../static/colors";

export const CheckboxWrapper = styled.div`
  margin-bottom: 32px;
`;
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${colors.darkGrey};
`;
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;
export const Icon = styled.svg`
  fill: none;
  stroke: gray;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid;
  border-color: ${({ isError }) => (isError ? colors.red : colors.darkGrey)};
  width: 24px;
  height: 24px;
  background: ${colors.white};
  border-radius: 4px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
export const TextLabel = styled.p`
  display: inline-block;
  margin-left: 12px;
  word-wrap: break-word;
  /* font-family: Roboto, sans-serif; */
  cursor: pointer;
`;
