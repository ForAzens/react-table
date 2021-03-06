import React from "react";

import DataTable from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Lab/DataTable",
  component: DataTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    enableSort: { control: "boolean" }
  }
};

const data = [
  { age: 1, visits: 89, status: "single", progress: 82 },
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

function Typography({ children, color }) {
  wait(50);

  return <span style={{ color }}>{children}</span>;
}
//
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
        <DataTable.Head>
          <DataTable.Header accessor="age">
            <span style={{ color: "blue" }}>Age</span>
          </DataTable.Header>
          <DataTable.Header accessor="visits">Visits</DataTable.Header>
          <DataTable.Header accessor="status">Status</DataTable.Header>
          <DataTable.Header accessor="progress">Progress</DataTable.Header>
        </DataTable.Head>
        <DataTable.Body>
          {row => (
            <DataTable.Row key={row.id} row={row}>
              <DataTable.Cell>
                {value => <Typography color="red">{value}</Typography>}
              </DataTable.Cell>
              <DataTable.Cell>
                {value => <Typography color="green">{value}</Typography>}
              </DataTable.Cell>
              <DataTable.Cell>
                {value => (
                  <button type="button" onClick={() => {}}>
                    {value}
                  </button>
                )}
              </DataTable.Cell>
              <DataTable.Cell />
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
  data
};
