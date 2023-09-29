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


export default function BasicExample1(props) {
  const {messages} = props;
  //console.log(props)
    return (
      <>
        {messages.map((message, idx) => {
          return (
            <MDBCard style={{ maxWidth: "540px", margin: "10px" }} key={idx}>

              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                    alt="..."
                    fluid
                  />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody style={{ maxWidth: "100%" }}>
                    <MDBCardTitle>{message}</MDBCardTitle>
                    <MDBCardText>
                      <small>Dentist</small>
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
