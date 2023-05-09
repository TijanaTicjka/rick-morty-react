import { useEffect, useState } from 'react';
import './DetailedCharacter.css';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { useParams } from 'react-router';

export const DetailedCharacter = () => {

    const {id} = useParams();
    const [character, setCharacter] = useState(null);

    console.log(character);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCharacter(data);
        })
    },[id]);

    if (!character) return null;

    return(
        <Container fluid>
            <Row className='character-home'>
                <Col className='d-flex justify-content-center align-items-start mt-5'>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={character.image} />
                        <Card.Body>
                            <Card.Title ></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
