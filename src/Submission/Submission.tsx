import React from "react";
import { useDispatch } from "react-redux";
import { PlaceSearch } from "Components/PlaceSearch";
import { submitClawMachine } from "store/claws/actions";
import { Col, Container, Row } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./Submission.scss";

export const Submission = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onPlaceChange = async (p: any) => {
    const placeId = p?.value?.place_id;
    if (!placeId) {
      return;
    }

    try {
      await dispatch(submitClawMachine(placeId));
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section
      className="section section-submission bg-light"
      data-testid="submission"
    >
      <Container className="submission-container mt-4 p-4">
        <Row>
          <Col className="d-flex justify-content-center">
            <img
              className="claw-machine-image"
              src="images/submission.png"
              alt="Claw Machine"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="submission-lead text-center">Where's the Claw Machine?</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <PlaceSearch
              apiKey={process.env.REACT_APP_GOOGLE_MAPS_CLIENT_KEY}
              onChange={onPlaceChange}
            ></PlaceSearch>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
