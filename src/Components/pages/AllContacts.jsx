import React, { useState, useEffect } from 'react'
import Header from '../Header.jsx'
import ContactCard from '../ContactCard.jsx'
import Navbar from '../Navbar.jsx'
import SearchBar from '../SearchBar.jsx'
import './AllContacts.css'

export default function AllContacts() {
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    console.log("searchTerm: ", searchTerm);
    if (searchTerm !== "") {
      const filteredContacts = contacts.filter(contact => {
        if (contact.full_name) {
          return contact.full_name.toLowerCase().includes(searchTerm.toLowerCase());
        }
      })
      setFilteredData(filteredContacts);
    } else {
      setFilteredData(contacts)
    }
  };

  useEffect(() => {
    fetch("https://rp-contacts-manager-backend.herokuapp.com/contacts/", {
      header: {
        Accept: 'application/json',
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setContacts(data)
        setFilteredData(data)
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    handleSearch()
  }, [searchTerm])

  return (
    <div class="all-contacts">
      <Header text="All Contacts" />
      <SearchBar value={searchTerm} onChange={handleChange} />
      <Navbar />
      <div>
        <ul>
          {filteredData ? filteredData.map((contact) => {
            return (
              <li key={contact._id}>
                <ContactCard contact={contact} />
              </li>
            )
          }) : "Loading..."
          }
        </ul>
      </div>
    </div>
  )
}
