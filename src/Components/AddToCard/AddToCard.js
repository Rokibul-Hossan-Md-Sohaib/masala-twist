import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import { useStateValue } from '../Sheared/Context/StateProvider';



const AddToCard = ({ card }) => {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div>

            <Link to="/review" >  <button className="btn btn-danger " style={{marginTop:"50px"}}><p>
                <FontAwesomeIcon icon={faAppleAlt} /> {basket?.length}</p></button>
            </Link>

        </div>
    );
};

export default AddToCard;