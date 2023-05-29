import { PaginationControl } from "react-bootstrap-pagination-control";

export const PaginationHome = ({
    pageNumber,
    setPageNumber,
    totalCharacters,
    setPageForCall }) => {

    return (
        <PaginationControl
        page={pageNumber}
        between={3}
        total={totalCharacters}
        limit={20}
        changePage={(pageNumber) => {
            setPageNumber(pageNumber);
            setPageForCall(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });}
        }
        ellipsis={1}
        />
    );
};