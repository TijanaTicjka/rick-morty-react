import './NotFound.css';
import {  Col, Figure } from 'react-bootstrap';
import notFound from '../../assets/no result.png';

export const  NotFound = () => {

    return(
        <Col className='no-result d-flex align-items-center flex-column'>
            <Figure className="d-flex justify-content-center align-items-center  flex-column not-found">
                <Figure.Image className="p-1"
                width={271}
                alt="171x180"
                src={notFound}
                />
                <h2 className='text-white text-center'>Nothing found! Try again!</h2>
            </Figure>
        </Col>
    );
};
