// Sidebar.js

import React from 'react';
import Close from "../images/closee.png";


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <img src={Close} onClick={toggle}  alt='' height={20} style={{float : "right" , margin : "10px"}}></img>
      <ul>
        <li>Dashboard</li>
        <li>Product</li>
        <li>Customers</li>
        <li>Income</li>
        <li>Promote</li>
        <li>Help</li>
      </ul>
    </div>
  );
}

export default Sidebar;
