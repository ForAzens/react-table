import * as React from "react";

function TableCell({ cell, children, ...delegate }, ref) {

  return (
    <td {...cell.getCellProps({ ref, ...delegate })}>
      {children != null ? children(cell.value) : cell.render("Cell")}
    </td>
  );
}

TableCell = React.memo(React.forwardRef(TableCell));

export default TableCell;
