import * as React from "react";

import { useDataTableContext } from "./context";

const DataTableBodyContext = React.createContext();

export function useDataTableBodyContext() {
  const context = React.useContext(DataTableBodyContext);
  if (context == null) {
    throw new Error(
      "useDataTableContext must be used within a DataTable component"
    );
  }

  return context;
}

function TableBody({ children, ...delegate }) {
  const { getTableBodyProps, rows } = useDataTableContext();

  const childrenArray =
    Array.isArray(children) && children.length > 1 ? children : [children];

  return (
    <tbody {...getTableBodyProps(delegate)}>
      {childrenArray.map(child => {
        if (typeof child === "function") {
          return rows.map(row => child(row));
        }

        return child;
      })}
    </tbody>
  );
}

TableBody = React.memo(TableBody);

export default TableBody;
