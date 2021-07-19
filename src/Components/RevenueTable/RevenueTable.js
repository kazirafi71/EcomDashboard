import React from "react";
import { Table } from "react-bootstrap";

const tableData = [
  {
    source: " Google",
    visitors: 12345,
    pageView: 1234,
    revenue: 1234,
  },
  {
    source: " Google",
    visitors: 12345,
    pageView: 1234,
    revenue: 1234,
  },
  {
    source: " Google",
    visitors: 12345,
    pageView: 1234,
    revenue: 1234,
  },
  {
    source: " Google",
    visitors: 12345,
    pageView: 1234,
    revenue: 1234,
  },
  {
    source: " Google",
    visitors: 12345,
    pageView: 1234,
    revenue: 1234,
  },
  {
    source: " Google",
    visitors: 12345,
    pageView: 1234,
    revenue: 1234,
  },
];

const RevenueTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Name Of Source</th>
            <th>Visitors</th>
            <th>Page View</th>
            <th>Revenue</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val) => {
            return (
              <tr className="text-center">
                <td>{val.source}</td>
                <td>{val.visitors}</td>
                <td>{val.pageView}</td>
                <td>{val.revenue}</td>
                <td>{val.revenue}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default RevenueTable;
