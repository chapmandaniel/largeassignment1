import { useNavigate } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="pageNavigation">
        <div className="navItem"><a href="/">Movie Reviews</a></div>
        <div className="navItem"><a href="/addmovie">Submit New Review</a></div>
    </nav>
  );
}

export default Navigation;