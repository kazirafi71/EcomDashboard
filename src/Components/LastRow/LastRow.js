import { Paper } from "@material-ui/core";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonNav from "./../Common/CommonNav/CommonNav";
import TopSellingTable from "./TopSellingTable/TopSellingTable";

const LastRow = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Paper>
              <CommonNav heading="Top Selling Products" />
              <TopSellingTable />
            </Paper>
          </Col>
          <Col md={4}>
            <Paper>
              <CommonNav heading="Sales By Location" />
            </Paper>
          </Col>
          <Col md={4}>
            <Paper>
              <CommonNav heading="Revenue By Device" />
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LastRow;
