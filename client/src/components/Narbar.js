import React from 'react';
import {Link} from "react-router-dom"
import "./Narbar.css"
const Navbar = () => {
    return (<nav className="navbar bg-dark">
        <h1>
            <Link to ="/">HealthIndex</Link>
        </h1>
        <ul>
            <li><Link to ="/impact" >Doctors/Healthcare Workers</Link></li>
            <li><Link to ="/register">Register</Link></li>
            <li><Link to ="/login">Login</Link></li>
        </ul>
    </nav>);
}

export default Navbar;