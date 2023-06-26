import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top">
        <Container>
          <Navbar.Brand>New York Citibike Trips</Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Full List</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
