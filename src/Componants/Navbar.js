import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div id='nav'>
        <h1>Component Life Cycle</h1>
        <div className='menu'>
        <ul className='change'>
            <li><Link to="/"> Mounting</Link></li>
            <li><Link to="/Updating">Updating</Link></li>
            <li><Link to="/Unmounting">Unmounting</Link> </li>

        </ul>
        </div>
    </div>
  )
}

export default Navbar