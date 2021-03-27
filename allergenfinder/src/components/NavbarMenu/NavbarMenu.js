import React from 'react';
import "./NavbarMenu.css";

function NavbarMenu() {
    return (
        <div className="navbarmenu">
            <ul id="nav">
                <li><a href="#">Starters</a></li>
                <li><a href="#">Mains</a></li>
                <li><a href="#">Extra</a></li>
                <li><a href="#">Desserts</a></li>
                <li><a href="#">Drinks</a></li>
            </ul>
        </div>
        )
}
export default NavbarMenu;