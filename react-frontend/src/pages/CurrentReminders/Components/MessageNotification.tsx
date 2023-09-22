import { useRef } from "react";
import { Row, Col, Alert, Button } from "react-bootstrap";

export interface MessageItemProp {
  _id: string;
  message: string;
  startDateTime: Date;
  webSocket: WebSocket;
}

const MessageNotification: React.FC<MessageItemProp> = ({
  _id,
  message,
  startDateTime,
  webSocket,
}) => {
  /* kept for historic  and example showing
   if component re-renders react will lose track of it
   but non-react best practice is addEventListener
  */
  /*
  const buttonMarkDone = document.getElementById(_id);
  buttonMarkDone?.addEventListener("click", () => {
    console.log("addElementListener" + _id);
  });
  */
  const buttonEvent = function () {
    console.log(_id);
    webSocket.send(_id);
    //make a call to hide this id element
    const rowRemove = document.getElementById("Row" + _id);
    if (rowRemove != undefined) {
      rowRemove.innerHTML = "";
    }
  };
  return (
    <Row id={"Row" + _id} className="d-flex align-items-center">
      <Col md={12}>
        <Alert variant="success">
          <Row>
            <Col md={8}>{message}</Col>
            <Col md={4} className="d-flex justify-content-end">
              <Button
                id={_id}
                variant="primary"
                className="mx-2"
                onMouseUp={buttonEvent}
              >
                Mark Done
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>Date:</Col>
          </Row>
          <Row>
            <Col>{new Date(startDateTime).toLocaleString("en-us")}</Col>
          </Row>
        </Alert>
      </Col>
    </Row>
  );
};

export default MessageNotification;
