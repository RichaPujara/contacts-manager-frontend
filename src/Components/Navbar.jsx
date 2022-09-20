import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to='/' className="navbar-item"> Home </Link>
        <Link to='/contacts' className="navbar-item"> All Contacts </Link>
        <Link to='/contacts/import' className="navbar-item"> Import New Contact </Link>
        <Link to='/contacts/new' className="navbar-item"> Create New Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar