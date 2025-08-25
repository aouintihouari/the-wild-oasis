import { createContext } from "react";
import styled from "styled-components";

import THeader from "./THeader";
import TBody from "./TBody";
import TRow from "./TRow";
import TFooter from "./TFooter";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableContext = createContext();

const Table = ({ columns, children }) => (
  <TableContext.Provider value={columns}>
    <StyledTable role="table">{children}</StyledTable>
  </TableContext.Provider>
);

Table.Header = THeader;
Table.Body = TBody;
Table.Row = TRow;
Table.Footer = TFooter;

export default Table;

export { TableContext };
