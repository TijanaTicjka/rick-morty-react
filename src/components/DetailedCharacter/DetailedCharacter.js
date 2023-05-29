import './DetailedCharacter.css';
import { Container, Row, Card, Badge, ListGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const DetailedCharacter = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data))
    },[id]);

    if (!character) return null;

    let badgeClass = "badge-detailed";

    if (character.status === "Alive") {
        badgeClass += " bg-success";
    } else if (character.status === "Dead") {
        badgeClass += " bg-danger";
    } else {
        badgeClass += " bg-secondary";
    }

    return(
        <Container fluid>
            <Row className='character-detailed d-flex justify-content-center align-items-center'>
                <Card style={{ width: '24rem' }} className="text-center card-detailed  gap-2 align-items-center mt-5">
                    <Card.Header className='card-header-detailed bg-info text-white border-bottom-5'>{character.name}</Card.Header>
                    <Badge className={badgeClass}>{character.status}</Badge>
                    <Card.Img variant="top" src={character.image} className="rounded border border-white"/>
                    <ListGroup variant="flush" className="rounded list">
                        <ListGroup.Item className="fw-bold"><span className="text-secondary fw-normal">Gender:</span> {character.gender}</ListGroup.Item>
                        <ListGroup.Item className="fw-bold"><span className="text-secondary fw-normal">Location:</span> {character.location.name}</ListGroup.Item>
                        <ListGroup.Item className="fw-bold"><span className="text-secondary fw-normal">Origin:</span> {character.origin.name}</ListGroup.Item>
                        <ListGroup.Item className="fw-bold"><span className="text-secondary fw-normal">Species:</span> {character.species}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Row>
        </Container>
    );
};
