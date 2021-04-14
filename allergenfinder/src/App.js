import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuCard from "./components/MenuCard/MenuCard";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import LogoTitle from "./components/LogoTitle/LogoTitle";
import Footer from "./components/Footer/Footer";
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./App.css";
import MenuList from './components/MenuList/MenuList';

function App() {

  const [cardInfo, setCardInfo] = useState([
    //Menu items for Nandos Restaurant options: main and starter
    {
      restid: "001", restname: "Nandos", id: "001", submenu: 'main', title: "NM-Halloumi Sticks & Dip", description: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75",
      allergen: [{  allergenid: '014', allergenImage: "/images/image14.png", tooltip: "Lupin" },
      { allergenid: '002', allergenImage: "/images/image2.png", tooltip: "Celery" }]
    },
    {
      restid: "001", restname: "Nandos", id: "002", submenu: 'main', title: "NM-5 Chicken Wings", description: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg",
      allergen: [{ allergenid: '002', allergenImage: "/images/image2.png", tooltip: "Celery" }]
    },
    {
      restid: "001", restname: "Nandos", id: "003", submenu: 'starter', title: "NS-Sunset Burger", description: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg",
      allergen: [{ allergenid: '003', allergenImage: "/images/image3.png", tooltip: "Treenuts" }]
    },
    {
      restid: "001", restname: "Nandos", id: "004", submenu: 'starter', title: "NS-The Great Imitator Wrap", description: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png",
      allergen: [{ allergenid: '001', allergenImage: "/images/image1.png", tooltip: "Gluten" }]
    },
    //Menu items for Bill's restaurant options: main and starter
    {
      restid: "002", restname: "Bills", id: "005", submenu: 'main', title: "BM-Halloumi Sticks & Dip2", description: "2Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75",
      allergen: [{  allergenid: '014', allergenImage: "/images/image14.png", tooltip: "Lupin" }]
    },
    {
      restid: "002", restname: "Bills", id: "006", submenu: 'main', title: "BM-5 Chicken Wings2", description: "2Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg",
      allergen: [{ allergenid: '002', allergenImage: "/images/image2.png", tooltip: "Celery" }]
    },
    {
      restid: "002", restname: "Bills", id: "007", submenu: 'starter', title: "BS-Sunset Burger2", description: "2Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg",
      allergen: [{ allergenid: '003', allergenImage: "/images/image3.png", tooltip: "Treenuts" }]
    },
    {
      restid: "002", restname: "Bills", id: "009", submenu: 'starter', title: "BS-The Great Imitator Wrap2", description: "2Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png",
      allergen: [{ allergenid: '001', allergenImage: "/images/image1.png", tooltip: "Gluten" }]
    },
  ])
  const [restaurants, setRestaurant] = useState([
    { restid: '001', restname: 'Nandos', branchname: 'London, Wembley', },
    { restid: '002', restname: 'Bills', branchname: 'Swindon' }
  ])

  const [allergens, setAllergens] = useState([
    { allergenid: '001', allergenname: 'Gluten', image: '/images/image1.png', },
    { allergenid: '002', allergenname: 'Celery', image: '/images/image2.png' },
    { allergenid: '003', allergenname: 'Treenuts', image: '/images/image3.png', },
    { allergenid: '004', allergenname: 'Fish', image: '/images/image4.png' },
    { allergenid: '005', allergenname: 'Soy', image: '/images/image5.png', },
    { allergenid: '006', allergenname: 'Sesame', image: '/images/image6.png' },
    { allergenid: '007', allergenname: 'Peanuts', image: '/images/image7.png', },
    { allergenid: '008', allergenname: 'Crustaceans', image: '/images/image8.png' },
    { allergenid: '009', allergenname: 'Eggs', image: '/images/image9.png', },
    { allergenid: '010', allergenname: 'Molluscs', image: '/images/image10.png' },
    { allergenid: '011', allergenname: 'Milk', image: '/images/image11.png', },
    { allergenid: '012', allergenname: 'Mustard', image: '/images/image12.png' },
    { allergenid: '013', allergenname: 'Sulphur Dioxide Sulphites', image: '/images/image13.png' },
    { allergenid: '014', allergenname: 'Lupin', image: '/images/image14.png' }
  ])

  const [selectedAllergens, setSeletedAllergens] = useState([])

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

  const selectAllergen = allergen =>{
    console.log(allergen)
    setSeletedAllergens(selectedAllergens =>[...selectedAllergens, allergen])
    console.log(selectedAllergens.length)

    console.log(selectedAllergens)
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
                <MenuList selectedMenu={selectedMenu} selectedAllergens = {selectedAllergens} />
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Footer allergens = {allergens} selectAllergen={selectAllergen}/>
        </Row>
      </div>
    </section >
  )
}
export default App;

