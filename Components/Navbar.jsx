import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { GiCookingGlove } from "react-icons/gi";
export default function NavBar(props){


    return <Navbar className={props.bgClass + " px-0 px-md-2"}>
        <div className={props.addClass + " d-flex flex-row-reverse flex-md-row w-100"}>
    <Navbar.Brand href="/"><GiCookingGlove/>Cook.io</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="text-dark" href="/ueber-uns">Über uns</Nav.Link>
        <Nav.Link className="text-dark" href="/impressum">Impressum</Nav.Link>
        <Nav.Link className="text-dark" href="/kontakt">Kontakt</Nav.Link>
      </Nav>
      </div>
  </Navbar>
}