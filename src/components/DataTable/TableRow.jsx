import * as React from "react";

import { useDataTableContext } from "./context";

function TableBody({ row, ...delegate }) {
  const { getTableBodyProps, rows, prepareRow } = useDataTableContext();

  prepareRow(row);

  console.log(row);

  return (
    <tr {...row.getRowProps({ ...delegate })}>
      {row.cells.map(cell => (
        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
      ))}
    </tr>
  );
}

export default TableBody;
