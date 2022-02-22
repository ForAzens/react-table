import * as React from "react";

import { useDataTableContext } from "./context";

function TableBody({ children, ...delegate }, ref) {
  const { getTableBodyProps, rows, page } = useDataTableContext();

  const childrenArray =
    Array.isArray(children) && children.length > 1 ? children : [children];

  return (
    <tbody {...getTableBodyProps({ ref, ...delegate})}>
      {childrenArray.map(child => {
        if (typeof child === "function") {
          return page.map(row => child(row));
        }

        return child;
      })}
    </tbody>
  );
}

TableBody = React.forwardRef(TableBody);

export default TableBody;
