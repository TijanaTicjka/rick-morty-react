import { Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router';

export const Header = () => {

    const navigate = useNavigate();
    const handleClick =() => {
        navigate('./');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Navbar bg="dark" variant="dark" className="fixed-top">
            <Container>
                <Navbar.Brand onClick={handleClick} style={{cursor:"pointer"}}>
                  <img
                    alt="logo"
                    src={logo}
                    width="120"
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};