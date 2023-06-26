import PageHeader from "@/component/PageHeader";
import { Container, Row, Col, Card } from "react-bootstrap";
import Map from "@/component/Map";

const trip = {
  "start station location": {
    coordinates: [-79.34943616, 43.79514851],
  },
  "end station location": {
    coordinates: [-79.36750352, 43.85012304],
  },
  "start station name": "Seneca College Newnham Campus",
  "end station name": "Seneca College Newnham Campus",
};

export default function About() {
  return (
    <>
      <PageHeader
        title="About"
        text="All about me - the developer"
        showSubscriber={false}
        showCustomer={false}
      />
      <br />
      <div>
        My name is Yongda Long, I am in the CPA program in Seneca College.
      </div>
      <br />
      <Card className="p-3">
        <Container>
          <Row>
            <Col>
              <h3>Seneca Polytechnic College Newnham Campus</h3>
              <div>
                Seneca College of Applied Arts and Technology, operating as
                Seneca Polytechnic. is a multiple-campus public college in the
                Greater Toronto Area, and Peterborough, Ontario, Canada regions.
                It offers full-time and part-time programs at the baccalaureate,
                diploma, certificate, and graduate levels. Wikipedia
              </div>
              <br />
              <div>
                <strong>Address: </strong>1750 Finch Ave E, North York, ON M2J
                2X5
              </div>
              <br />
              <div>
                <strong>Phone: </strong>(416) 491-5050
              </div>
              <br />
              <div>
                <strong>Undergraduate tuition and fees: </strong>2,686 CAD,
                International tuition 11,970 CAD (2014 – 15)
              </div>
              <br />
              <div>
                <strong>Total enrollment: </strong>97,500 (2014)
              </div>
              <br />
              <div>
                <strong>President: </strong>David Agnew
              </div>
              <br />
              <div>
                <strong>Mascot: </strong>Sammy Sting
              </div>
              <br />
              <div>
                <strong>Founded: </strong>1967
              </div>
            </Col>
            <Col>
              <Map props={trip} />
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
