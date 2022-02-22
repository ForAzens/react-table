import * as React from "react";

import { useDataTableState } from "./context";

import { setHeaders } from "./reducer";

function TableHead({ columns, children, ...delegate }, ref) {
  const [, dispatch] = useDataTableState();
  const childrenArray = React.Children.toArray(children);

  React.useEffect(() => {
    const headers = React.Children.map(children, (child) => {
      if (child == null) return null;
      const { accessor, children: childrenHeader } = child.props;

      return { accessor, Header: childrenHeader };
    });

    const filteredHeaders = headers.filter(Boolean);

    setHeaders(dispatch, filteredHeaders);
  }, [children]);

  return (
    <thead ref={ref} {...delegate}>
      <tr>
        {React.Children.map(children, (child) => {
          if (child == null) return;

          const column = columns.find(
            (col) => col && col.id === child.props.accessor
          );

          if (column) {
            return React.cloneElement(child, { column });
          }
        })}
      </tr>
    </thead>
  );
}

TableHead = React.forwardRef(TableHead);

export default TableHead;
