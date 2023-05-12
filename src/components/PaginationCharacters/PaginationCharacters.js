import './PaginationCharacter.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export const PaginationCharacters = ({
    pageNumber,
    setPageNumber,
    totalCharacters,
    setPageForCall,
    setTimeForCall}) => {

    return (
        <PaginationControl
        page={pageNumber}
        between={3}
        total={totalCharacters}
        limit={10}
        changePage={(pageNumber) => {
            setPageForCall(Math.ceil(pageNumber/2));
            setTimeForCall(prevTimeForCall => !prevTimeForCall)
            setPageNumber(pageNumber)}
        }
        ellipsis={1}
        />
    );
};