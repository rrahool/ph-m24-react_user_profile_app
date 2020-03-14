import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/pro_list">Profile List</a>
                <a href="/account">My Account</a>
                <a href="/settings">Settings</a>
            </nav>
        </div>
    );
};

export default Header;