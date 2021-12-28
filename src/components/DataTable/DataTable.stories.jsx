import React from "react";

import DataTable from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Lab/DataTable",
  component: DataTable
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const headers = [
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "Visits",
    accessor: "visits"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Profile Progress",
    accessor: "progress"
  }
];

const data = [
  { age: 2, visits: 89, status: "single", progress: 82 },
  { age: 2, visits: 89, status: "cells", progress: 82 },
  { age: 2, visits: 89, status: "single", progress: 82 },
  { age: 2, visits: 89, status: "single", progress: 82 },
  { age: 2, visits: 89, status: "single", progress: 82 },
  { age: 2, visits: 89, status: "single", progress: 82 },
  { age: 2, visits: 89, status: "single", progress: 82 },
  { age: 2, visits: 89, status: "cells", progress: 82 },
  { age: 2, visits: 89, status: "cells", progress: 82 },
  { age: 2, visits: 89, status: "cells", progress: 82 },
  { age: 2, visits: 89, status: "cells", progress: 82 },
  { age: 2, visits: 89, status: "cells", progress: 82 }
];

function wait(ms) {
  const start = new Date().getTime();

  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function Typography({ children }) {
  wait(50);

  return <span>{children}</span>;
}

Typography = React.memo(Typography);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  const [, forceUpdate] = React.useReducer(c => c + 1, 0);
  return (
    <>
      <button type="button" onClick={forceUpdate}>
        Force re-render
      </button>
      <DataTable {...args}>
        <DataTable.Body>
          {row => (
            <DataTable.Row key={row.id} row={row}>
              {(value, i) => (
                <DataTable.Cell key={i}>
                  <Typography>{value}</Typography>
                </DataTable.Cell>
              )}
            </DataTable.Row>
          )}
          <tr>
            <td>Add button</td>
          </tr>
        </DataTable.Body>
      </DataTable>
    </>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  columns: headers,
  data
};
