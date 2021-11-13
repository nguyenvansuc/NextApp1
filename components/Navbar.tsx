import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

interface Props {}

const NavbarComponent = (props: Props) => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Next App</Navbar.Brand>
            <Nav className="me-auto link">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/post">
                <a>Post</a>
              </Link>
              <Link href="/joke/random">
                <a>Joke</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default NavbarComponent;
