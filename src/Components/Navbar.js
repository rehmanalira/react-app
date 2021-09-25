import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>

                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'green' ? 'dark' : ' light'}   `}>
                        <input className="form-check-input" onClick={props.toggleGreenMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Mode</label>
                    </div>


                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : ' light'}   `}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Mode</label>
                    </div>
                </div>
            </div>
        </nav>

    );


}

// Props We send from the view and get the values in JS 
// We can send then as object or as we want 
// As in Title We send the title from App.js to Navabar and assign them the value

// Asssignn the data Type of props means the information we get from the App.js is String Bollean or object
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

// Here We Setting The Default propTypes Means if We not send the props from App.js These Will Be The Default
// As in App.js i have not send the about but propTypes will be default

Navbar.defaultProps = {
    about: 'About'
}

