import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom"; //Importamos navlink y link para la navegacion interna entre páginas


const Navbar = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav__links'>
          {/* Página Home */}
          <NavLink to='/' className='nav__link'>
            HOME
          </NavLink>
          {/* Página Form */}
          <NavLink to='/form' className='nav__link' activeclass="active">
            FORM
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar