import { Paper } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonNav from "../Common/CommonNav/CommonNav";
import RevenueTable from "../RevenueTable/RevenueTable";

const MiddleRow = () => {
  return (
    <div>
      <Container className="py-4">
        <Row>
          <Col md={6}>
            <Paper>
              <CommonNav heading="Total Revenue" />
            </Paper>
          </Col>
          <Col md={6}>
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
