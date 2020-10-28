import React from 'react';

function Navbar(){
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container is-max-desktop">
                <div className="navbar-brand">
                    <div className="navbar-item"><strong className="has-text-danger">Billie</strong> Mission 2120</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;