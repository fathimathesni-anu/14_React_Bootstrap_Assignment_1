import React from 'react'
import { Carousel } from "react-bootstrap";
import{Container} from "react-bootstrap";
function Carosel() {
  return (
    <Container fluid>
    <Carousel variant="dark" controls indicators>
    <Carousel.Item>
      <img
        src="https://www.keralatouronline.in/data1/images/ban5.jpg"
        className="d-block w-100"
        alt="Slide 1"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://www.keralatouronline.in/data1/images/ban2.jpg"
        className="d-block w-100"
        alt="Slide 2"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://www.keralatouronline.in/data1/images/ban3.jpg"
        className="d-block w-100"
        alt="Slide 3"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="https://www.keralatouronline.in/data1/images/ban4.jpg"
        className="d-block w-100"
        alt="Slide 4"
      />
    </Carousel.Item>
  </Carousel>  
  </Container>
  )
}

export default Carosel