import Pagination from 'react-bootstrap/Pagination';

export const PaginationCharacters = ({pageNumber, setPageNumber}) => {

  const handleNext = () => {
      setPageNumber(pageNumber + 1)
  }

  const handlePrevious = () => {
    if(pageNumber > 1) return setPageNumber(pageNumber -1);
  }

  return (
    <Pagination className='d-flex justify-content-center'>
      <Pagination.First />
      <Pagination.Prev onClick={handlePrevious}/>
     <Pagination.Item>{pageNumber}</Pagination.Item>

       {/* <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next onClick={handleNext}/>
      <Pagination.Last />
    </Pagination>
  );
}