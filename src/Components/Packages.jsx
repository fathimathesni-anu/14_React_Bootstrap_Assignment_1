import React, { useState } from "react";
import { Container, Button, Card, Modal, Row, Col } from "react-bootstrap";

function Packages({ packages }) {
  const [activeModal, setActiveModal] = useState(null); 

  const handleShow = (id) => setActiveModal(id); 
  const handleClose = () => setActiveModal(null); 

  return (
    <Container>
      <Row className="gy-4"> 
        {packages.map((pkg) => (
          <Col key={pkg.id} xs={12} sm={6} md={4} lg={3}> 
            <Card className="bg-black h-50"> 
              <Card.Img variant="top" src={pkg.image} alt={pkg.title} />
              <Card.Body>
                <Card.Title className="text-white">{pkg.title}</Card.Title>
                <Button variant="success" onClick={() => handleShow(pkg.id)}>
                  Enquiry
                </Button>
              </Card.Body>
            </Card>

            
            <Modal
              show={activeModal === pkg.id} 
              onHide={handleClose}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>{pkg.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul className="p-4">
                  {pkg.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="success">Book Now</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Packages;
