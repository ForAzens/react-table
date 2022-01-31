import * as React from "react";

const DataTableContext = React.createContext();

export function useDataTableContext() {
  const context = React.useContext(DataTableContext);
  if (context == null) {
    throw new Error(
      "useDataTableContext must be used within a DataTable component"
    );
  }

  return context;
}

function DataTableProvider(props) {
  return <DataTableContext.Provider {...props} />;
}

export default DataTableProvider;

const DataTableStateContext = React.createContext();

export function useDataTableState() {
  const context = React.useContext(DataTableStateContext);
  if (context == null) {
    throw new Error(
      "useDataTableContext must be used within a DataTable component"
    );
  }

  return context;
}

export function DataTableStateProvider(props) {
  return <DataTableStateContext.Provider {...props} />
}
