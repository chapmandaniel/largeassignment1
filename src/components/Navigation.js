import {Link, useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';




function Navigation() {
  return (

           <Nav variant="pills" defaultActiveKey="/home" className={"pageNavigation"}>
               <Nav.Item className={"navItem"}>
                   <Link to={"/"}>Home</Link>
               </Nav.Item>
               <Nav.Item className={"navItem"}>
                   <Link to={"/addMovie"}>Add Movie</Link>
               </Nav.Item>
           </Nav>

  );
}

export default Navigation;