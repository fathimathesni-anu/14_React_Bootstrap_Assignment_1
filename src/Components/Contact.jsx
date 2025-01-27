import React from 'react'
import { Card, Container, Form, Button } from "react-bootstrap";
import './Contact.css' 
function Contact() {
  return (
    <div className=" vh-75vh">
      <Card className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
    

        <Container fluid className="p-4 bg-success text-center  id= details"  >
          <header>
             <h1 className="text-white mb-4" >Contact Us</h1>
          </header>
        </Container>

        <Container fluid className="p-1 bg-white text-white  mt-3 w-50">
          <Form id="QueryForm">
            {/* Name Field */}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
              />
            </Form.Group>

            {/* Phone Number Field */}
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                required
              />
            </Form.Group>

            {/* Date Field */}
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="date"
                name="date"
                placeholder="Enter the date"
                required
              />
            </Form.Group>

            {/* Adults Field */}
            <Form.Group className="mb-3" controlId="adults">
              <Form.Label>Adults:</Form.Label>
              <Form.Control
                type="number"
                name="adults"
                placeholder="Enter the number of adults"
                required
              />
            </Form.Group>

            {/* Kids Field */}
            <Form.Group className="mb-3" controlId="kids">
              <Form.Label>Kids:</Form.Label>
              <Form.Control
                type="number"
                name="kids"
                placeholder="Enter the number of kids"
                required
              />
            </Form.Group>

            {/* Query Field */}
            <Form.Group className="mb-3" controlId="query">
              <Form.Label>Query:</Form.Label>
              <Form.Control
                as="textarea"
                name="query"
                rows={6}
                placeholder="Enter your Query"
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button className="w-100" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Card>
    </div>
  )
}

export default Contact