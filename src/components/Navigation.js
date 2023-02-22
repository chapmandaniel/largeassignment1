import {Link, useNavigate} from 'react-router-dom';


function Navigation() {
  return (
        // create a navigation component using React Router
        // the navigation component should have a link to the home page and the add movie page
        // the navigation component should have a button that when clicked will navigate to the home page
       <nav className={"pageNavigation"}>
            <Link to={"/"} className={"navItem"}>Home</Link>
            <Link to={"/addMovie"} className={"navItem"}>Add Movie</Link>
       </nav>
  );
}

export default Navigation;