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

  return (
    <tbody {...getTableBodyProps(delegate)}>
      {typeof children === "function" ? children(rows) : children}
    </tbody>
  );
}

export default TableBody;

// {rows.map(row => {

//   prepareRow(row);

//   return (

//     <tr {...row.getRowProps()}>

//       {row.cells.map(cell => (

//         <td {...cell.getCellProps()}>{cell.render("Cell")}</td>

//       ))}

//     </tr>

//   );

// })}
