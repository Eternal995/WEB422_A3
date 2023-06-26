import { Card } from "react-bootstrap";

export default function PageHeader(props) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          <h3>{props.title}</h3>
          <div>
            {props.text}
            {props.showSubscriber && (
              <button className="Subscriber custom-button float-end">
                Subscriber
              </button>
            )}
            {props.showCustomer && (
              <button className="Customer custom-button float-end">
                Customer
              </button>
            )}
          </div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
