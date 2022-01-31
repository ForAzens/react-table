import React from "react";
import "@testing-library/jest-dom";

import { screen, render } from "@testing-library/react";

import Table from "..";
import TableBody from "../TableBody";

test("test", () => {
  const data = [
    {
      a: "a",
      b: "b"
    }
  ];

  render(
    <Table data={data}>
      <Table.Head>
        <Table.Header accessor="a">Column A</Table.Header>
        <Table.Header accessor="b">Column B</Table.Header>
      </Table.Head>
      <TableBody>
        {row => (
          <Table.Row row={row} key={row.id}>
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        )}
      </TableBody>
    </Table>
  );

  expect(screen.getAllByRole("columnheader")).toHaveLength(2);
  expect(screen.getByText(/Column A/)).toBeInTheDocument();
  expect(screen.getByText(/Column B/)).toBeInTheDocument();
});
