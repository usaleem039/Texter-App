import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer(props) {
  return (
    <footer className="mt-auto fixed " >
        
      <Container >
        <Row>
          <Col className="text-center">
            
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className={`icon text-${props.mode} mx-2 my-1`} size={30} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={`icon text-${props.mode} mx-2 my-1`} size={30}/>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={`icon text-${props.mode} mx-2 my-1`} size={30} />
              </a>
            </div>

            <p>&copy; {new Date().getFullYear()} TEXTER. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
