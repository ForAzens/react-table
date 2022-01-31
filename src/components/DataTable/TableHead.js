import * as React from "react";

import { useDataTableState } from "./context";

import { setHeaders } from "./reducer";

function TableHead({ columns, children, ...delegate }, ref) {
  const [, dispatch] = useDataTableState();
  const childrenArray = React.Children.toArray(children);

  React.useEffect(() => {
    const headers = React.Children.map(children, child => {
      const { accessor, children: childrenHeader } = child.props;

      return { accessor, Header: childrenHeader };
    });

    setHeaders(dispatch, headers);
  }, []);

  return (
    <thead ref={ref} {...delegate}>
      <tr>
        {React.Children.map(children, child => {
          const column = columns.find(
            col => col && col.id === child.props.accessor
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
