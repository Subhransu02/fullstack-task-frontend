import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from './logo1.avif';
import logo2 from './logo2.webp';
import logo3 from './logo3.jpg';

function BasicExample() {
  return (
    <div className="App">
      <h1>Book an appointment for an in-clinic consulatation</h1>
      <p className="para">Find experienced doctors across all specialities</p>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={logo1} style={{ width: 268, height: 246}} />
          <Card.Body>
            <Card.Title>Dentist</Card.Title>
            <Card.Text>
              Teething triubles ? Schedule a dental checkup
            </Card.Text>
            <Card.Link href="/dentist">Book Apppointment</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={logo2} style={{ width: 268, height: 246 }} />
          <Card.Body>
            <Card.Title>Gynecologist/Obstetrician</Card.Title>
            <Card.Text>
              Explore for women's health, pregnancy and infertility treatments.
            </Card.Text>
            <Card.Link href="/gynac">Book Apppointment</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={logo3} style={{ width: 268, height: 246 }} />
          <Card.Body>
            <Card.Title>Dietitian/Nutrition</Card.Title>
            <Card.Text>
              Get guidance on eating right, weight management and sports nutrition.
            </Card.Text>
            <Card.Link href="/diet">Book Apppointment</Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default BasicExample;
