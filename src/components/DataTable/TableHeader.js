import * as React from "react";
import styled from "styled-components";

import { useTable, useSortBy, usePagination } from "react-table";

function TableHeader({ column, children, ...delegate }, ref) {
  console.log(column);

  const sortedIconContent = () => {
    if (!column.isSorted) {
      return "";
    }

    if (column.isSortedDesc) {
      return <span> 🔽</span>;
    }

    return <span> 🔼</span>;
  };

  return (
    <th {...column.getHeaderProps(column.getSortByToggleProps({...delegate}))}>
      {children != null ? children(column.Header) : column.render("Header")}
      {sortedIconContent()}
    </th>
  );
}

TableHeader = React.forwardRef(TableHeader);

export default TableHeader;
