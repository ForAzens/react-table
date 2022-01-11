import * as React from "react";

function TableHead({ columns, children, ...delegate }, ref) {
  const childrenArray = React.Children.toArray(children);

  return (
    <thead ref={ref} {...delegate}>
      <tr>
        {columns.map((column, i) => {
          const Element = childrenArray[i];

          if (Element == null) return null;

          return React.cloneElement(Element, { key: i, column });
        })}
      </tr>
    </thead>
  );
}

TableHead = React.forwardRef(TableHead);

export default TableHead;
