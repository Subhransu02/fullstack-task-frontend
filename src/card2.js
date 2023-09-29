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

export default function BasicExample2(props) {
  const { messages } = props;
  return (
    <>
      {messages.map((message, idx) => {
        return (
          <MDBCard style={{ maxWidth: "540px", margin: "10px" }} key={idx}>
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp2ZCdAAYqQlWUHco5WLt24KMjUSgx5Bv9A&usqp=CAU"
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody style={{ maxWidth: "100%" }}>
                  <MDBCardTitle>{message}</MDBCardTitle>
                  <MDBCardText>
                    <small>Gynecologist</small>
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
