import React from "react";
import emoji from "../../Assets/emoji.png";
import "./style.css";
import { Button, Card } from "react-bootstrap";

const EmployeItem = ({ employe, text }) => {
  let { fullName, work } = employe;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name : {fullName}</Card.Title>
        <Card.Text>work {work}</Card.Text>
        <Button variant="primary">Submit</Button>
      </Card.Body>
    </Card>
  );
};

export default EmployeItem;
