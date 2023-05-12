import { Card, ListGroup, Badge, Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import { useState } from "react";
import './CharacterCard.css';


export const CharacterCard = ({name, image, status, id, location}) => {

    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    const navigate = useNavigate();

    const handleEnter = (id) => {
        setHoveredCardIndex(id);
    };

    const handleLeave = () => {
        setHoveredCardIndex(null);
    };

    let badgeClass = "badge-home";

    if (status === "Alive") {
        badgeClass += " bg-success";
    } else if (status === "Dead") {
        badgeClass += " bg-danger";
    } else {
        badgeClass += " bg-secondary";
    }

    return (
        <Card
            className={hoveredCardIndex === id ? "card-home card-hovered" : "card-home"}
            onMouseEnter={() => handleEnter(id)}
            onMouseLeave={handleLeave}>
            <Card.Img variant="top" src={image} />
            <Badge className={badgeClass}>{status}</Badge>
            <Card.Header className="card-header-home">{name}</Card.Header>
            <ListGroup variant="flush" className="text-center">
                <ListGroup.Item><span className="text-muted">Last location:</span><p>{location}</p> </ListGroup.Item>
            </ListGroup>
            <div className="card-overlay">
                <Button className="card-button" variant="outline-info" size="sm" onClick={()=> navigate(`/character/${id}`)} > See More </Button>
            </div>
        </Card>
    );
};