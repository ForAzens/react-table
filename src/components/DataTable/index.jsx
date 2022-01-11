import * as React from "react";
import styled from "styled-components";

import { useTable, useSortBy, usePagination } from "react-table";

import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import DataTableProvider, { DataTableStateProvider } from "./context";

function DataTable({ columns, data, children, ...delegate }, ref) {
  const [state, setState] = React.useState({
    pagination: {
      active: false
    }
  });

  const tableValues = useTable(
    {
      columns,
      data
    },
    useSortBy,
    usePagination
  );
  const { getTableProps, headers, rows } = tableValues;

  return (
    <DataTableStateProvider value={[state, setState]}>
      <DataTableProvider value={tableValues}>
        <Table {...getTableProps({ ref, ...delegate })}>
          {React.Children.map(children, child =>
            React.cloneElement(child, { rows, columns: headers })
          )}
        </Table>
      </DataTableProvider>
    </DataTableStateProvider>
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

DataTable = React.memo(React.forwardRef(DataTable));
DataTable.Body = TableBody;
DataTable.Row = TableRow;
DataTable.Cell = TableCell;
DataTable.Head = TableHead;
DataTable.Header = TableHeader;

export default DataTable;
