import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./components/Body/Body";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import TitleLogo from "./components/TitleLogo/TitleLogo";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import "./App.css";


function App() {
  return (
    <section id="menu bar">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-between">
          <div class="col-sm-12 col-md-7">
            <section>
              <TitleLogo />
            </section>
          </div>
          <div class="col-sm-12 col-md-2 col">
            <section>
              <DropdownMenu />
            </section>
          </div>
        </div>

        <div class="row align-items-center justify-content-between" id = "menu">
          <div class="col-sm-12 col-md-6">
            <section>
            <NavbarMenu/>
            </section>
          </div>
          <div class="col-sm-12 col-md-2">
            <section>
           <h1>button</h1>
            </section>
          </div>
          <div class="col-sm-12 col-md-4">
            <section>
            </section>
          </div>
        </div>

        <div class="row align-items-center justify-content-between" id = "body">
          <div><Body/></div>

        </div>

      </div>
    </section >
  )


}
/** 
  return (
    <body>
      <section id="header">
        <div class="container">
          <Header />
        </div>
      </section>

      

    </body>
  )
}
**/

export default App;
