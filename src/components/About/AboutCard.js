import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Mahadik </span>
            from <span className="purple"> Vita, India.</span>
            <br />
            I am currently employed as a Software Trainer at Disha Computer Institute.
            <br />
            I have completed Diploma in CSE at AIT Collage.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching Software skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Hollywood Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shubham Mahadik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
