import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuCard from "./components/MenuCard/MenuCard";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import LogoTitle from "./components/LogoTitle/LogoTitle";
import Footer from "./components/Footer/Footer";
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./App.css";

function App() {
  const [restaurants, setRestaurant] = useState([
    { restId: '001', restName: 'Nandos', branchName: 'London, Wembley',  },
    { restId: '002', restName: 'Nandos', branchName: 'Manchester' },
    { restId: '003', restName: 'Bills', branchName: 'Swindon' },
  ])

  const cardInfo= [
    { restid: "001", id: "001", title: "Halloumi Sticks & Dip", description: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75", allergen: "/images/image14.png", tip: "Lupin" },
    { restid: "001", id: "002", title: "5 Chicken Wings", description: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg", allergen: "/images/image2.png", tip: "Celery" },
    { restid: "001", id: "003", title: "Sunset Burger", description: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg", allergen: "/images/image3.png", tip: "Treenuts" },
    { restid: "001", id: "004", title: "The Great Imitator Wrap", description: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png", allergen: "/images/image1.png", tip: "Gluten" },
    { restid: "003", id: "005", title: "Halloumi Sticks & Dip2", description: "2Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75", allergen: "/images/image14.png", tip: "Lupin" },
    { restid: "003", id: "006", title: "5 Chicken Wings2", description: "2Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg", allergen: "/images/image2.png", tip: "Celery" },
    { restid: "003", id: "007", title: "Sunset Burger2", description: "2Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg", allergen: "/images/image3.png", tip: "Treenuts" },
    { restid: "003", id: "008", title: "The Great Imitator Wrap2", description: "2Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png", allergen: "/images/image1.png", tip: "Gluten" }
]

  const [selectedMenu, setSelectedMenu] = useState({cardInfo})

  const selectRestaurant = id => {
  const filteredMenu = cardInfo.filter(menuItem => menuItem.restId === id)
  setSelectedMenu(filteredMenu);
  }
  
  return (
    <section id="app">
      <div className="container-fluid">
        <Row>
          <LogoTitle restaurants = {restaurants} selectRestaurant = {selectRestaurant} />
        </Row>
        <Row>
          <NavbarMenu />
        </Row>
        <Row>
          <Col>
            <Container className="menu-container">
              <Row >
                <MenuCard selectedMenu = {selectedMenu}/>
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
