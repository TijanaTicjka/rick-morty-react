import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, InputGroup } from "react-bootstrap";
import './Search.css';

export const Search = ({setSerchTerm, searchTerm}) => {

    const handleSearch = (term) => {
        setSerchTerm(term);
        console.log(term);
    }

    return (
        <Form className="d-flex justify-content-center">
            <InputGroup>
                <Form.Control type="text" placeholder="Type to search..." className="border-0" 
                value={searchTerm}
                onChange={(event)=> handleSearch(event.target.value)}/>
                <InputGroup.Text className="border-0">
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
            </InputGroup>
        </Form>
    );
};

