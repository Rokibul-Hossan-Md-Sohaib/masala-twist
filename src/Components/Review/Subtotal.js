import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { getBasketTotal } from '../Sheared/Context/reducer';
import { useStateValue } from '../Sheared/Context/StateProvider';

const Subtotal = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div>
            <h5 className="font-weight-bold"> Food Item{basket.length}  </h5>

            <p className="text-secondary">Total amount :${getBasketTotal(basket)}
            </p>
            <Link to="/shipment">
                <button className="btn btn-success pb-3 pt-3 mt-4">Proceed CheckOut</button>

            </Link>

        </div>
    );
};

export default Subtotal;