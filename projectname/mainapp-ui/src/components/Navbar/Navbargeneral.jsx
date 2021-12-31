import React from "react";
import {NavLink } from "react-router-dom";

function Navbar(){
    return(<div>
        <div className="header">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link-white">Домашня сторінка </NavLink>
                    <NavLink to="/" className="nav-link-white">Page2 </NavLink>
                    <NavLink to="/" className="nav-link-white">Page3</NavLink>
                </li>
            </ul>
        </div>

        </div>
        );
}
export default Navbar;