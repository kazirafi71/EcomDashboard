import React from "react";
import { Table } from "react-bootstrap";

const tableData = [
  { title: "Samsung Galaxy S8", price: 1234, sold: 123, revenue: 123 },
  { title: "Samsung Galaxy S8", price: 1234, sold: 123, revenue: 123 },
  { title: "Samsung Galaxy S8", price: 1234, sold: 123, revenue: 123 },
  { title: "Samsung Galaxy S8", price: 1234, sold: 123, revenue: 123 },
  { title: "Samsung Galaxy S8", price: 1234, sold: 123, revenue: 123 },
  { title: "Samsung Galaxy S8", price: 1234, sold: 123, revenue: 123 },
  { title: "Samsung Galaxy S8", price: 1234, sold: 123, revenue: 123 },
  { title: "Samsung Galaxy S8", price: 1234, sold: 123, revenue: 123 },
  
];

const TopSellingTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Products Name</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val) => {
            return (
              <tr className="text-center">
                <td>{val.title}</td>
                <td>${val.price}</td>
                <td>{val.sold}</td>
                <td>${val.revenue}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TopSellingTable;
