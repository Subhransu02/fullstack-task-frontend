import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function BasicExample3(props) {
  const { messages } = props;
  return (
    <>
      {messages.map((message, idx) => {
        return (
          <MDBCard style={{ maxWidth: "540px", margin: "10px" }} key={idx}>
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src="https://www.shutterstock.com/shutterstock/photos/1676159821/display_1500/stock-photo-beautiful-african-woman-dietologist-holding-apple-in-her-hand-recommending-fresh-fruits-posing-at-1676159821.jpg"
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody style={{ maxWidth: "100%" }}>
                  <MDBCardTitle>{message}</MDBCardTitle>
                  <MDBCardText>
                    <small>Dietitian</small>
                  </MDBCardText>
                  <MDBCardText>
                    <small>10 years of experience overall</small>
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">Place</small>
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">Fees</small>
                  </MDBCardText>
                  <button>Book Appointment</button>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        );
      })}
    </>
  );
}
