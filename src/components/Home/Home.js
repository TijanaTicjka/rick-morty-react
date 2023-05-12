import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { PaginationHome } from '../PaginationHome/PaginationHome';
import { PaginationCharacters } from '../PaginationCharacters/PaginationCharacters';
import { Search } from '../Search/Search';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { NotFound } from '../NotFound/NotFound'
import { useEffect, useState } from 'react';

export const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [pageForCall, setPageForCall] = useState(1);
    const [timeForCall, setTimeForCall] = useState(false);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
   
 
    useEffect(() => {
        let url = `https://rickandmortyapi.com/api/character?page=${pageForCall}&name=${searchTerm}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.results) {
                if(searchTerm) {
                    pageNumber % 2 !==0 ? setCharacters(data.results.slice(0,10)):
                    setCharacters(data.results.slice(10, data.results.length));
                    setTotalCharacters(data.info.count)}
                else {
                    setCharacters(data.results);
                    setTotalCharacters(data.info.count);
                  };
            } else {
                setCharacters([]);
              };
        });
    }, [timeForCall, searchTerm, pageNumber, pageForCall]);

    return(
        <Container fluid className='home'>
            <Row>
                <Col>
                  <h1 className='text-center p-3 text-white'>Characters</h1>
                </Col>
            </Row>
             <Row className="d-flex justify-content-center">
                <Col>
                  <Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  setPageNumber={setPageNumber}
                  setPageForCall={setPageForCall}
                   />
                </Col>
            </Row>
            <Row className="pb-3 d-flex flex-wrap justify-content-center gap-3 mt-3 align-items-center">
                {characters && characters.length > 0 ? (
                    characters.map((c) => (
                        <CharacterCard
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        gender={c.gender}
                        image={c.image}
                        status={c.status}
                        location={c.location.name}
                        />))
                    ) : ( <NotFound/> )
                }
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-end pb-3 pagination-div">
                    {characters && characters.length > 0 ? (
                        searchTerm ? (
                            <PaginationCharacters
                            setPageNumber={setPageNumber}
                            pageNumber={pageNumber}
                            totalCharacters={totalCharacters}
                            setPageForCall={setPageForCall}
                            setTimeForCall={setTimeForCall}
                            /> ) : (
                            <PaginationHome
                            setPageNumber={setPageNumber}
                            pageNumber={pageNumber}
                            totalCharacters={totalCharacters}
                            setPageForCall={setPageForCall}
                            timeForCall={timeForCall}
                            setTimeForCall={setTimeForCall}
                            /> )
                        ) : ( <div></div> )
                    };
                </Col>
            </Row>
        </Container>   
    );
};