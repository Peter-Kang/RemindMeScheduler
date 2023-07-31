import React from "react";
import "../../assets/Current.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHealthCheck } from "../../hooks/healthCheck.js";

import { Link } from "react-router-dom";
import { useActiveTodos } from "../../hooks/useTodos.js";

import MessageNotification from "./Components/MessageNotification.tsx";

const Current = () => {
  const { isAlive, retrigger } = useHealthCheck();
  const { activeTodos, webSocket } = useActiveTodos();

  return (
    <Container>
      <Button onClick={retrigger}>Live check</Button>
      <span>
        <font color="white"> {isAlive.message}</font>
      </span>
      <br />
      <Row className="d-flex align-items-center">
        <Col md={12} className="d-flex justify-content-end">
          <Link variant="success" to="/Edit" className="btn btn-success">
            Edit
          </Link>
        </Col>
      </Row>
      <br />
      {activeTodos.map((messageItem) => (
        <MessageNotification
          key={messageItem._id}
          _id={messageItem._id}
          message={messageItem.message}
          startDateTime={messageItem.startDateTime}
          webSocket={webSocket}
        ></MessageNotification>
      ))}
    </Container>
  );
};

export default Current;
