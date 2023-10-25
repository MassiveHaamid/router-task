import React from 'react';
import Card from 'react-bootstrap/Card';

function ArticleCard({ title, content, imageUrl, lastUpdated }) {

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated {lastUpdated}</small>
      </Card.Footer>
    </Card>
  );
}

export default ArticleCard;
