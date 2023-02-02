import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardJurusan(props) {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.jurusan}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="success">lihat silabus</Button>
            </Card.Body>
        </Card>
    );
}

export default CardJurusan;