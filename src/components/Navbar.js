import React, { useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

    const [isActive, setisActive] = useState(false)

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container is-max-desktop">
                <div className="navbar-brand">
                    <div className="navbar-item"><strong className="has-text-danger">Billie</strong> Mission 2120</div>
                    <a 
                    role="button"
                    href="#/"
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} 
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarMenu'
                    onClick={() => {setisActive(!isActive)}}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id='navbarMenu' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/" onClick={() => {setisActive(!isActive)}}>
                            Home
                        </Link>
                        <Link className="navbar-item" to="/research" onClick={() => {setisActive(!isActive)}}>
                            Research
                        </Link>
                        <Link className="navbar-item" to="/companies" onClick={() => {setisActive(!isActive)}}>
                            Companies
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;