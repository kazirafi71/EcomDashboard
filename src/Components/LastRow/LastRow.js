import { Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonNav from "./../Common/CommonNav/CommonNav";
import LocationMap from "./LocationMap/LocationMap";
import LocationTable from "./LocationTable/LocationTable";
import RevenuePicChart from "./PicChart/RevenuePicChart";
import TopSellingTable from "./TopSellingTable/TopSellingTable";
import AOS from "aos";

const LastRow = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col data-aos="fade-up-right" className="py-2" md={4}>
            <Paper style={{ height: "510px", overflow: "hidden" }}>
              <CommonNav heading="Top Selling Products" />
              <TopSellingTable />
            </Paper>
          </Col>
          <Col data-aos="fade-up-right" className="py-2" md={4}>
            <Paper style={{ height: "510px", overflow: "hidden" }}>
              <CommonNav heading="Sales By Location" />
              <LocationMap />
              <LocationTable />
            </Paper>
          </Col>
          <Col data-aos="fade-up-right" className="py-2" md={4}>
            <Paper style={{ height: "510px", overflow: "hidden" }}>
              <CommonNav heading="Revenue By Device" />
              <RevenuePicChart />
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LastRow;
