import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, InputGroup } from "react-bootstrap";

export const Search = ({
    setSearchTerm,
    searchTerm,
    setPageNumber,
    setPageForCall}) => {

    const handleSearch = (term) => {
        setSearchTerm(term);
        setPageForCall(1)
        setPageNumber(1);
    }

    return (
        <Form className="d-flex justify-content-center">
            <InputGroup size='lg'>
                <InputGroup.Text className="border-0">
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control type="search" placeholder="Search for characters" className="border-0" 
                value={searchTerm}
                onChange={(event)=> handleSearch(event.target.value)}/>
            </InputGroup>
        </Form>
    );
};

