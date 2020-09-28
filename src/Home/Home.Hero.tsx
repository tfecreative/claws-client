import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClawMap } from "ClawMap";
import { Button, Container, Col, Jumbotron, Row } from "reactstrap";
import "./Home.Hero.scss";
import { Location } from "ClawMap/types";
import { clawsActions } from "store/claws/types";
import { IAppState } from "store/types";

export const HomeHero = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const clawLocations: Location[] = useSelector(
    (state: IAppState) => state.claws.locations || []
  );

  const defaultCenter: Location = {
    lat: 40.79739,
    lng: -81.377037,
  };

  const loadClaws = () => {
    dispatch({
      type: clawsActions.LOAD_CLAW_LOCATIONS,
    });
  };

  useEffect(() => {
    loadClaws();
  }, []);

  const goToSubmission = () => {
    history.push("/submission");
  };

  return (
    <Jumbotron className="home-hero p-0">
      <Container className="m-0 p-0" fluid>
        <div className="glass">
          <div className="glass__line" />
          <div className="glass__line" />
        </div>
        <Row className="m-0">
          <Col className="p-4 d-flex">
            <ClawMap
              apiKey={process.env.REACT_APP_GOOGLE_MAPS_CLIENT_KEY || ""}
              center={defaultCenter}
              locations={clawLocations}
              zoom={11}
            />
          </Col>
          <Col className="p-4">
            <h2>Discover Claw Machines</h2>
            <p className="lead">
              Check out nearby claw machine spots on the map and support your
              local businesses while you show off your claw machine skills.
            </p>
            <Button
              color="primary"
              className="font-weight-bold"
              onClick={goToSubmission}
            >
              Submit Claw Machine
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
