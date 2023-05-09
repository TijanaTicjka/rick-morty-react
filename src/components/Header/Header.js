import { Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/Rick_and_Morty.svg.png';
import { useNavigate } from 'react-router';

export const Header = () => {
  const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={()=> navigate("/")} style={{cursor:"pointer"}}>
                  <img
                    alt="logo"
                    src={logo}
                    width="120"
                    className="d-inline-block align-top"
                  />{' '}
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}