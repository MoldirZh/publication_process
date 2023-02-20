import './Styles/App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }
  return (
  <nav>
    <h3>Publication System</h3>
    <ul className = "nav-links">
    <Link style={navStyle} to='/home'>
        <li>Home</li>
        </Link>
        <Link style={navStyle} to='/login'>
        <li>Login</li>
        </Link>
        <Link style={navStyle} to='/register'>
        <li>Register</li>
        </Link>
    </ul>
  </nav>
  );
}

export default Nav;