import React from "react";
import { Table } from "react-bootstrap";

const tableData = [
  { topLoc: "USA", Order: 2323, revenue: 232 },
  { topLoc: "USA", Order: 2323, revenue: 232 },
  { topLoc: "USA", Order: 2323, revenue: 232 },
  { topLoc: "USA", Order: 2323, revenue: 232 },
];

const LocationTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>TOP LOCATION</th>
            <th>ORDER</th>
            <th>REVENUE</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val) => {
            return (
              <tr>
                <td>{val.topLoc}</td>
                <td>{val.Order}</td>
                <td>${val.revenue}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default LocationTable;
