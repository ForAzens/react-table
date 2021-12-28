import * as React from "react";

import { useDataTableContext } from "./context";

function TableRow({ row, children, ...delegate }, ref) {
  const { prepareRow } = useDataTableContext();

  const childrenArray = React.Children.toArray(children);

  prepareRow(row);

  return (
    <tr {...row.getRowProps({ ref, ...delegate })}>
      {row.cells.map((cell, i) => {
        const Element = childrenArray[i];

        if (Element == null) return null;

        return React.cloneElement(Element, { key: i, cell });
      })}
    </tr>
  );
}

TableRow = React.memo(React.forwardRef(TableRow));

export default TableRow;
