import { Card} from "react-bootstrap";
import { useNavigate } from "react-router";


export const CharacterCard = ({name, image, status, id}) => {

    const navigate = useNavigate();

    return (
      <Card style={{ width: '18rem' }} onClick={()=> navigate(`/character/${id}`)}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title >{name}</Card.Title>
            <Card.Text>{status}</Card.Text>
      </Card.Body>
    </Card>
  );

}