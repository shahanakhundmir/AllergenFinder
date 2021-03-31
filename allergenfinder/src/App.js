import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Footer from "./components/Footer/Footer";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu"
import NavbarMenu from "./components/NavbarMenu/NavbarMenu"
import "./App.css";

function App() {
  return (
    <div>
      <NavbarMenu />
      <DropdownMenu />
      <Footer />
    </div>
    )
}

export default App;