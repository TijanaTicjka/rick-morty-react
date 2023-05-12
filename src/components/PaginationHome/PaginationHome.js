import { PaginationControl } from "react-bootstrap-pagination-control";

export const PaginationHome = ({
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
        limit={20}
        changePage={(pageNumber) => {
            setPageNumber(pageNumber)
            setPageForCall(pageNumber)
            setTimeForCall(prevTimeForCall => !prevTimeForCall)}
        }
        ellipsis={1}
        />
    );
};