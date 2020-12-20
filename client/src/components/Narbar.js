import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../actions/auth"
import "./Narbar.css"
const Navbar = ({ auth: { isAuth, loading }, logout }) => {
    const userViews = (<ul>
        <li>
            <Link to="/" onClick={logout}><i className="fas fa-sign-out-alt"></i>Logout</Link>
        </li>
    </ul>
    )
    const guestViews = (
        <ul><li ><Link to="/register">Register</Link></li>
            <li>
                <Link to="/login">Log In</Link>
            </li>
        </ul>
    )
    return (<nav className="navbar bg-dark">
        <h1>
            <Link to="/">HealthIndex</Link>
        </h1>
        <ul>
            {!loading &&
                (<Fragment>{isAuth ? userViews : guestViews}</Fragment>)}

        </ul>
    </nav>);
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(Navbar);