import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import Map from "./Map";
import { Row, Col, Container, Button } from "react-bootstrap";
import RobotState from "./RobotState";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container>
          <h1 className="text-center mt-3">Robot controller page</h1>
          <Row>
            <Col>
              <Connection />
            </Col>
            <Row >
            <RobotState >
            </RobotState>
            </Row>
          </Row>

          <Row>
            <Col>
              <Teleoperation />
            </Col>
            <Col>
              <h1>Map</h1>
              <Map></Map>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
