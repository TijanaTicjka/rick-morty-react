import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { PaginationCharacters } from '../PaginationCharacters/PaginationCharacters';
import { Search } from '../Search/Search';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { useEffect, useState } from 'react';

export const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [characters, setCharacters] = useState([]);

    console.log(characters);
    
    const [searchTerm, setSerchTerm] = useState("");
    let url = "";
    searchTerm? url = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${searchTerm}`: url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;

    console.log(pageNumber);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setCharacters(data.results);
        });
    }, [pageNumber, searchTerm]);

    if(!characters) return 

    return(
        <Container fluid className='home'>
            <Row>
                <Col>
                  <h1 className='text-center p-3 text-white'>Characters</h1>
                </Col>
            </Row>
             <Row>
                <Col>
                  <Search
                  searchTerm={searchTerm}
                  setSerchTerm={setSerchTerm}
                   />
                </Col>
            </Row>
            <Row>
              <Col className='d-flex flex-wrap justify-content-center gap-3 m-3'>
                {(searchTerm && characters.length > 10 ? characters.slice(0, 10) : characters).map((c, index) => (
                  <CharacterCard
                    key={index}
                    id={c.id}
                    name={c.name}
                    gender={c.gender}
                    image={c.image}
                    status={c.status}
                  />))};
              </Col>
            </Row>
            <Row>
                <Col>
                  <PaginationCharacters
                   setPageNumber={setPageNumber}
                   pageNumber={pageNumber}
                   />
                </Col>
            </Row>
        </Container>
    )
            
}