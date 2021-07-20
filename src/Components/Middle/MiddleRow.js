import { Paper } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonNav from "../Common/CommonNav/CommonNav";
import RevenueTable from "../RevenueTable/RevenueTable";
import RevenuePicChart from "./../LastRow/PicChart/RevenuePicChart";
import RevenueChart from "./RevenueChart/RevenueChart";

const MiddleRow = () => {
  return (
    <div>
      <Container className="py-4">
        <Row>
          <Col className="py-2" md={6}>
            <Paper>
              <CommonNav heading="Total Revenue" />
              <RevenueChart />
            </Paper>
          </Col>
          <Col className="py-2" md={6}>
            <Paper>
              <CommonNav heading="Source Of Revenue Generated" />
              <RevenueTable />
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiddleRow;
