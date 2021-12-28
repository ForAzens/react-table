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

const data = [{ age: 2, visits: 89, status: "single", progress: 82 }];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return (
    <DataTable {...args}>
      <DataTable.Body>
        {rows => rows.map(row => <DataTable.Row key={row.id} row={row} />)}
      </DataTable.Body>
    </DataTable>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  columns: headers,
  data
};
