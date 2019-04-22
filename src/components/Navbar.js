import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const NavBar = () => {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">Streamy</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-2">
                                <Link to="/streams/show" className="nav-link">All Streams</Link>
                            </li>
                            <GoogleAuth />
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default NavBar;