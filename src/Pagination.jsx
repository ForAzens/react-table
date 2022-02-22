import * as React from "react";

import { useDataTableContext } from "./context";

function TablePagination({ children }) {
  const {
    state,
    pageCount,
    canPreviousPage,
    canNextPage,
    goToPage,
    previousPage,
    nextPage,
    setPageSize,
  } = useDataTableContext();
  const { pageIndex, pageSize } = state;

  return children({
    pageIndex,
    pageSize,
    pageCount,
    canPreviousPage,
    canNextPage,
    goToPage,
    previousPage,
    nextPage,
    setPageSize,
  });
}

export default TablePagination;
