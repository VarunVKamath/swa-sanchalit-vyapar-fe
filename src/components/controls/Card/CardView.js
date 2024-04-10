import React from "react";
import { Card } from "react-bootstrap";
import "./CardStyles.scss";
const CardView = ({ children, title, image, customStyle = {} }) => {
  return (
    <div className="card-control">
      <Card className="card">
        {image && <Card.Img variant="top" src={image} style={customStyle} />}
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardView;
