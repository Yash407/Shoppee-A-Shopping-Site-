import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faPersonDress } from '@fortawesome/free-solid-svg-icons';
import { faChildReaching } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [showSidebar, setShowSidebar] = useState(false); 
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); 
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shoppee</p>
      </div>
      <div className={`nav-menu ${showSidebar ? 'show-sidebar' : ''}`}>
        <ul>
          <li onClick={() => { setMenu("Home") }}>
            <Link to='/'>Home</Link>{menu === "Home" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("Men") }}>
            <Link to='/men'>Men</Link>{menu === "Men" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("Women") }}>
            <Link to='/women'>Women</Link>{menu === "Women" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("Kids") }}>
            <Link to='/kid'>Kids</Link>{menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className="nav-login-cart">
        {isAuthenticated && <p>Welcome {user.name}</p>}
        {isAuthenticated ? (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
        <Link to='/cart'><img src={cart_icon} alt="cart-logo" /></Link>
      </div>
      <div className="menu-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="sidenavbar-icon" />
        {showSidebar && (
          <>
        <ul>
          <li onClick={() => { setMenu("Home") }}>
            <Link to='/'><FontAwesomeIcon icon={faHouse} style={{marginRight:"10px", fontSize:"16px", color:"black"}}/>Home</Link>{menu === "Home" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("Men") }}>
            <Link to='/men'><FontAwesomeIcon icon={faPerson} style={{marginRight:"10px",color:"black"}}/>Men</Link>{menu === "Men" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("Women") }}>
            <Link to='/women'><FontAwesomeIcon icon={faPersonDress} style={{marginRight:"6px",color:"black"}}/> Women</Link>{menu === "Women" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("Kids") }}>
            <Link to='/kid'><FontAwesomeIcon icon={faChildReaching} style={{marginRight:"10px",color:"black"}}/>Kids</Link>{menu === "Kids" ? <hr /> : <></>}
          </li>
          <li className='login'>
        {isAuthenticated && <p>Welcome {user.name}</p>}
        {isAuthenticated ? (
          <a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
           <FontAwesomeIcon icon={faUser} style={{marginRight:"10px",color:"black"}}/> Log Out
          </a>
        ) : (
          <a onClick={() => loginWithRedirect()}><FontAwesomeIcon icon={faUser} style={{marginRight:"10px",color:"black"}}/>Log In</a>
        )}
        </li>
        </ul>
       
        </>
        )}
        
      </div>
    </div>
  )
}

export default Navbar;
