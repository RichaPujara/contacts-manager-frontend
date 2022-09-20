import React from 'react'
import { Link } from 'react-router-dom'
import AllContacts from './AllContacts'
import Header from '../Header'

const Home = () => {
  return (
    <div>
      <Header text= "Welcome to Contact Manager App"/>
      <div>
        <div>
          <Link to='/contacts'> View All Contacts</Link>
        </div>
        <div>
          <Link to='/contacts/import'>Import Contact </Link>
        </div>
        <div>
          <Link to='/contacts/new'>Create New Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Home