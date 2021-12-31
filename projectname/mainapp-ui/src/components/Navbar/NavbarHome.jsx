import React from 'react'
import {NavLink} from "react-router-dom";

export default function NavbarHome() {
    return (
        <div className="linksNav">
            <NavLink exact to="revision" className="nav-link link-primary" >Перегляд</NavLink>
            <NavLink to="additions" className="nav-link link-primary">Додати нову техніку</NavLink>
            <NavLink to="transfer" className="nav-link link-primary">Виписати наряд</NavLink>
        </div>
    )
}
