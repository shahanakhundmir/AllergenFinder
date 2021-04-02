import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuCard from "./components/MenuCard/MenuCard";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
//import TitleLogo from "./components/TitleLogo/TitleLogo";
//import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import LogoTitle from "./components/LogoTitle/LogoTitle";
import Footer from "./components/Footer/Footer";
import { Grid, Row, Col, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./App.css";


function App() {
  const [restaurants, setRestaurant] = useState([
    { restId: '001', restName: 'Nandos', branchName: 'London, Wembley' },
    { restId: '002', restName: 'Nandos', branchName: 'Manchester' },
    { restId: '003', restName: 'Bills', branchName: 'Swindon' },
  ])

  return (
    <section id="app">
      <div className="container-fluid">
        <Row>
          <LogoTitle restaurants={restaurants} />
        </Row>
        <Row>
          <NavbarMenu />
        </Row>
        <Row>
          <Col>
            <Container className="menuContainer">
              <Row >
                <Col className="menuCol">
                  <MenuCard />
                </Col>
                <Col className="menuCol">
                  <MenuCard />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </div>
    </section >
  )
}
export default App;
