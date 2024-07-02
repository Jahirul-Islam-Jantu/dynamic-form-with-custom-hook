import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <NavLink className="nav-link" to="/">Dynamic Form</NavLink>
            <NavLink className="nav-link" to="/test">Dynamic Form</NavLink>
        </div>
    );
};

export default Menu;