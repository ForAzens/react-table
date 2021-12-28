import * as React from "react";

function TableCell({ cell, children, ...delegate }) {

  return (
    <td {...cell.getCellProps({ ...delegate })}>
      {children != null ? children : cell.render("Cell")}
    </td>
  );
}

TableCell = React.memo(TableCell);

export default TableCell;
