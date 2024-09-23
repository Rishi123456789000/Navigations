import Card from 'react-bootstrap/Card';

function Basiccard({ title, category, description, image, rate, rat, price }) {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rating: {rate} ({rat} reviews)</Card.Text>
        <button variant="dark">{price}</button>
      </Card.Body>
    </Card>
  );
}

export default Basiccard;

