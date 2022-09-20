import React, { useState, useEffect } from 'react'
import ContactForm from '../ContactForm'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../Header'

const UpdateContact = () => {
  const params = useParams()
  const [contact, setContact] = useState("")
  const nav = useNavigate()

  useEffect(() => {
    fetch(
      `https://rp-contacts-manager-backend.herokuapp.com/contacts/${params.id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": " application/json"
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch((err) => console.log(err))
  }, []);

  const handleUpdate = (values) => {
    let full_name = ""
    if (values.name_prefix) { full_name += values.name_prefix += " "; }
    if (values.first_name) { full_name += values.first_name += " "; }
    if (values.last_name) { full_name += values.last_name += " "; }
    if (values.middle_name) { full_name += values.middle_name += " "; }
    if (values.name_suffix) { full_name += values.name_suffix }

    const options = { ...values, full_name: full_name }
    const metadata = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options),
    }
    fetch(`https://rp-contacts-manager-backend.herokuapp.com/contacts/${params.id}`, metadata)
      .then(res => res.json())
      .then(jsonResponse => nav(`/contacts/${jsonResponse._id}`))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Header text="Update Contact" />
      <ContactForm data={contact} onFinish={handleUpdate} />
    </>
  )
}

export default UpdateContact
