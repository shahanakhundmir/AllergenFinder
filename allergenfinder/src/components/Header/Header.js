import React from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import TitleLogo from "../TitleLogo/TitleLogo";
import NavbarMenu from "../NavbarMenu/NavbarMenu";


//import NavbarMenu from "../NavbarMenu/NavbarMenu";
//import TitleLogo from "../TitleLogo/TitleLogo"
import "./Header.css";

function Header() {
    return (

        <body>
            <section id='header'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col align-self-start col-sm-12 col-md-5' ><TitleLogo/></div>
                        <div className='col-sm-12 col-md-4'></div>
                        <div className='col-sm-12 col-md-3' id = 'menu-button' ><DropdownMenu /></div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 col-md-6' ><NavbarMenu/></div>
                        <div className='col-sm-12 col-md-1'>Button</div>
                        <div className='col-sm-12 col-md-2'></div>
                        <div className='col-sm-12 col-md-3'></div>
                    </div>
                </div >
            </section >
        </body >
)
}

export default Header;

//<div><NavbarMenu /></div>