import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardS(props) {
  return (
    <div className='custom-card text-center'>
     <Card>
      <Card.Img variant="top" src={props.url} className='img'/>
      <Card.Body>
        <Card.Title>{props.nama}</Card.Title>
        <Card.Text>
          {props.desk}
        </Card.Text>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div>
            {/* Konten lain dalam footer */}
          </div>
          <Link to={`/edit/${props.id}`} className="btn btn-primary">Edit</Link>
        </Card.Footer>
      </Card.Body>
    </Card>
</div>
      
  );
}

export default CardS;