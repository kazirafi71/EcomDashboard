import { Paper } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import HeaderChart from "./HeaderChart/HeaderChart";

const data = [
  { price: 1000, title: "Orders", percentage: "25% ", in: "up" },
  { price: 3000, title: "Revenue", percentage: "25% ", in: "up" },
  { price: 3000, title: "Avg Orders", percentage: "25% ", in: "down" },
  { price: 6000, title: "Unique Visitor", percentage: "25% ", in: "up" },
];

const HeaderCard = () => {
  return (
    <div>
      <Container>
        <Row>
          {data.map((val) => {
            return (
              <Col className="py-2" md={3}>
                <Paper className="p-3">
                  <h3>{val.price}</h3>
                  <p>{val.title}</p>
                  <div className="d-flex ">
                    {val.in === "up" && (
                      <p className="mr-2" style={{ color: "green" }}>
                        <ArrowUpwardIcon />
                        {val.percentage}
                      </p>
                    )}
                    {val.in === "down" && (
                      <p className="mr-2" style={{ color: "red" }}>
                        <ArrowDownwardIcon />
                        {val.percentage}
                      </p>
                    )}

                    <span
                      style={{ color: "gray", paddingLeft: "5px" }}
                      className="ml-2 "
                    >
                      since last weak
                    </span>
                  </div>
                  <HeaderChart />
                </Paper>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default HeaderCard;
