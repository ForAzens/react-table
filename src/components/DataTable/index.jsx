import * as React from "react";
import styled from "styled-components";

import { useTable } from "react-table";

import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import DataTableProvider from "./context";

function DataTable({ columns, data, children, ...delegate }, ref) {
  const tableValues = useTable({
    columns,
    data
  });
  const { getTableProps, headers } = tableValues;

  return (
    <DataTableProvider value={tableValues}>
      <Table {...getTableProps(ref, {...delegate})}>
        <thead>
          <tr>
            {headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        </thead>
        {children}
      </Table>
    </DataTableProvider>
  );
}

const Table = styled.table`
  font-weight: 500;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
`;


DataTable = React.memo(DataTable);
DataTable.Body = TableBody;
DataTable.Row = TableRow;
DataTable.Cell = TableCell;

export default DataTable;
