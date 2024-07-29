import React from "react";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./myBooking.css";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import {FaGreaterThan} from "react-icons/fa"

const BookingPage =()=> {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Booked", value: "2" },
    { name: "Past", value: "3" },
  ];
  return (
    <div>
      <Container id="container">  
        <Row>
          <Col>
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? "outline-primary" : "outline-primary"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>

        <Card className="mb-3 border-0 mt-5 "  id="card" style={{ maxWidth: "440px" }}>
          <Row className="g-0 p-1">
            <Col md={4} sm={12}>
              <Image
                src="https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/02/BK0031-bed-modern-bed-design-in-pakistan-Woodwoon.webp?fit=1536%2C1024&ssl=1"
                fluid
                roundedStart
                id="img"
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title  className="flex ">
                    <p id="standard">STANDARD SINGLE</p>
                    <p className="icon"><FaGreaterThan/></p>
                    
                    </Card.Title>
                    <br/>
                    <p id="price" className="flex" >Rs. 0.0/DAY</p>
              
                <div className="flex ">
                  <p>1 Person - 1 Bed</p>
                  <p>2 Day</p>
                </div>
              </Card.Body>
             
            </Col>
            <Col>
           <hr id="hr"/>
            <div className="flex p-2">
                <p>Booking is processing...</p>
                <p>Estimate wait 2 min</p>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default BookingPage;
