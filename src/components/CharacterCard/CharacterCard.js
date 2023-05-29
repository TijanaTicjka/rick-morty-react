import { Card, ListGroup, Badge, Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import './CharacterCard.css';

export const CharacterCard = ({name, image, status, id, location}) => {

    const navigate = useNavigate();

    let badgeClass = "badge-home";

    if (status === "Alive") {
        badgeClass += " bg-success";
    } else if (status === "Dead") {
        badgeClass += " bg-danger";
    } else {
        badgeClass += " bg-secondary";
    }

    return (
        <Card className="card-home">
            <Card.Img variant="top" src={image} />
            <Badge className={badgeClass}>{status}</Badge>
            <Card.Header className="card-header-home">{name}</Card.Header>
            <ListGroup variant="flush" className="text-center">
                <ListGroup.Item><span className="text-muted">Last location:</span><p>{location}</p> </ListGroup.Item>
            </ListGroup>
            <div className="card-overlay">
                <Button className="card-button text-white" variant="info" size="md" onClick={()=> navigate(`/character/${id}`)} > See More </Button>
            </div>
        </Card>
    );
};