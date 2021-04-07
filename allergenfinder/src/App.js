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
    { restid: '001', restname: 'Nandos', branchname: 'London, Wembley', },
    { restid: '002', restname: 'Bills', branchname: 'Swindon' }
  ])

  const [cardInfo, setCardInfo] = useState([
    
    //Menu items for Nandos Restaurant options: main and starter
    {
      restid: "001", restname: "Nandos", id: "001", submenu: 'main', title: "NM-Halloumi Sticks & Dip", description: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75",
      allergen: [{ allergenImage: "/images/image14.png", tooltip: "Lupin" },
      { allergenImage: "/images/image2.png", tooltip: "Celery" }]
    },

    {
      restid: "001", restname: "Nandos", id: "002", submenu: 'main', title: "NM-5 Chicken Wings", description: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg",
      allergen: [{ allergenImage: "/images/image2.png", tooltip: "Celery" }]
    },

    {
      restid: "001", restname: "Nandos", id: "003", submenu: 'starter', title: "NS-Sunset Burger", description: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg",
      allergen: [{ allergenImage: "/images/image3.png", tooltip: "Treenuts" }]
    },

    {
      restid: "001", restname: "Nandos", id: "004", submenu: 'starter', title: "NS-The Great Imitator Wrap", description: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png",
      allergen: [{ allergenImage: "/images/image1.png", tooltip: "Gluten" }]
    },

    //Menu items for Bill's restaurant options: main and starter
    {
      restid: "002", restname: "Bills", id: "005", submenu: 'main', title: "BM-Halloumi Sticks & Dip2", description: "2Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75",
      allergen: [{ allergenImage: "/images/image14.png", tooltip: "Lupin" }]
    },

    {
      restid: "002", restname: "Bills", id: "006", submenu: 'main', title: "BM-5 Chicken Wings2", description: "2Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg",
      allergen: [{ allergenImage: "/images/image2.png", tooltip: "Celery" }]
    },

    {
      restid: "002", restname: "Bills", id: "007", submenu: 'starter', title: "BS-Sunset Burger2", description: "2Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg",
      allergen: [{ allergenImage: "/images/image3.png", tooltip: "Treenuts" }]
    },

    {
      restid: "002", restname: "Bills", id: "009", submenu: 'starter', title: "BS-The Great Imitator Wrap2", description: "2Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png",
      allergen: [{ allergenImage: "/images/image1.png", tooltip: "Gluten" }]
    },
  ])

  const [selectedMenu, setSelectedMenu] = useState(cardInfo)

  // filters menu items by restaurant
  const selectRestaurant = id => {
    refreshMenu();
    const filteredMenu = selectedMenu.filter(menuItem => menuItem.restid === id)
    setSelectedMenu(filteredMenu)
  }

  // refreshes to full menu before filtering 
  const refreshMenu = () => {

    setSelectedMenu(cardInfo)

    console.log('refreshed')
    console.log(selectedMenu)
  }

  // filters menu items by sub menu  selectSubMenu
  const selectSubMenu = sub => {
    console.log(sub)
    console.log('submenu')
    const filteredSubMenu = selectedMenu.filter(menuItem => menuItem.submenu === sub)
    setSelectedMenu(filteredSubMenu)
  }

  return (

    <section id="app">
      <div className="container-fluid">
        <Row>
          <LogoTitle restaurants={restaurants} selectRestaurant={selectRestaurant} refreshMenu={refreshMenu} />
        </Row>
        <Row>
          <NavbarMenu selectSubMenu={selectSubMenu} />
        </Row>
        <Row>
          <Col>
            <Container className="menu-container">
              <Row style={{ border: '2px solid turquoise' }}>
                <MenuCard selectedMenu={selectedMenu} />
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
