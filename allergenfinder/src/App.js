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
        <div className="row align-items-center justify-content-between">
          <div>
            <LogoTitle restaurants={restaurants} />
          </div>
        </div>

        <div className="row align-items-center justify-content-between">
          <div>
            <NavbarMenu />
          </div>
        </div>

        <div className="row align-items-center justify-content-between">
          <div >
            <Row >
              <Container style={{
                position: 'relative',
                top: '170px',
                marginBottom:'200px',
                paddingBottom:'40px',
                backgroundColor: "#68869A",
                borderRadius: "10px",
              }}>
                <Row >
                  <Col>
                    <MenuCard />
                  </Col>
                  <Col >
                    <MenuCard />
                  </Col>
                </Row>
              </Container>
            </Row>

          </div>
        </div>

        <div className="row align-items-center justify-content-between">
          <div>
            <Footer/>
          </div>
        </div>

      </div>
    </section >
  )
}
export default App;
