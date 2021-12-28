import * as React from "react";

import { useDataTableContext } from "./context";

function TableRow({ row, children, ...delegate }) {
  const { prepareRow } = useDataTableContext();

  prepareRow(row);

  return (
    <tr {...row.getRowProps({ ...delegate })}>
      {row.cells.map((cell, i) => {
        const Element = children(cell.value, i);

        return React.cloneElement(Element, { cell });
      })}
    </tr>
  );
}

TableRow = React.memo(TableRow);

export default TableRow;
