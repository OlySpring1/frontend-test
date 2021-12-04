import styled from "styled-components";
import { colors } from "../../static/colors";
export const TableWrapper = styled.div`
  width: 100%;
  min-width: 280px;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  margin: 0 auto;
`;
export const TableStyled = styled.table`
  vertical-align: top;

  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid ${colors.gray};
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th {
    text-align: left;
  }
`;
