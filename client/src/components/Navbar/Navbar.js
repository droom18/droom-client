import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link className="school-list" to="/">
                Home
                </Link>
            </div>
            <div>
                {/* check api for link for schools */}
                <Link className="school-form" to="/schools/schoolRoutes">
                School list
                </Link>


                {/* ./donations/donationRoutes */}
            </div>
            <div>
                <Link className="donation-list" to="/donations/donationRoutes">
                Donation List
                </Link>
            </div>
         </div>
    );
};


export default Navbar;