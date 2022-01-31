import * as React from "react";
import styled from "styled-components";

function TableHeader({ column, children, ...delegate }, ref) {
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
    <th
      {...column.getHeaderProps(column.getSortByToggleProps({ ...delegate }))}
    >
      {column.render("Header")}
      {sortedIconContent()}
    </th>
  );
}

TableHeader = React.forwardRef(TableHeader);

export default TableHeader;
