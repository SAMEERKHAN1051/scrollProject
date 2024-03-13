import React, { useState } from 'react';
import '../styles/navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <div className='mainNav'>
      <div className="logo">
        <p className='logoText'>Logo</p>
      </div>
      
      
      {/* Show menu icon on small screens */}
      <div className="menuIcon" onClick={handleMenuToggle}>
  <MenuIcon />
</div>

      {/* Display navigation items */}
      <ul className={`navList ${showMenu ? 'showMenu' : ''}`}>
        <li className='navItems'>Home</li>
        <li className='navItems'>About</li>
        <li className='navItems'>Features</li>
        <li className='navItems'><button className='navContactBtn'>Contact</button></li>
        <li className='navItems'><button className='navAppBtn'>Get App</button></li>
      </ul>
    </div>
  );
};

export default Navbar;
