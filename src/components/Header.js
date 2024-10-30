import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';



function Header(props) {



  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg={`${props.mode}`} variant="dark">
      <Container>
      <Navbar.Brand href="/home">
            <img
            src="favicon-32x32.png"
            
              alt=""
              width="32"
              height="32"
              className="d-inline-block align-top"
            />{' '}
         Texter
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navitem" >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
      
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      <Form  >
      <Form.Check // prettier-ignore
      onClick={props.toggleMode}
      style={{color:'white',marginRight:'1rem',paddingRight:'1rem'}}
        
        type="switch"
        id="custom-switch"
        label="Toggle Mode"
      />
      </Form>
    </Navbar>
  );
}

export default Header;