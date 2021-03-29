import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./components/Body/Body";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
//import TitleLogo from "./components/TitleLogo/TitleLogo";
//import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import LogoTitle from "./components/LogoTitle/LogoTitle";
import Footer from "./components/Footer/Footer";
import "./App.css";


function App() {


  return (
    <section id="menu bar">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-between">
          <div>
            <LogoTitle/>
          </div>
        </div>

        <div class="row align-items-center justify-content-between">
          <div>
          <NavbarMenu />
          </div>
        </div>

        <div class="row align-items-center justify-content-between">
          <div>
            <Body />
          </div>
        </div>

        <div class="row align-items-center justify-content-between">
          <div><Footer />
          </div>
        </div>

      </div>
    </section >
  )
}
export default App;
