import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContactForm from '../ContactForm';
import Header from '../Header';

const NewContact = () => {
  const nav = useNavigate()

  const handleSubmit = (values) => {
    let full_name = ""
    if (values.name_prefix) { full_name += values.name_prefix += " "; }
    if (values.first_name) { full_name += values.first_name += " "; }
    if (values.last_name) { full_name += values.last_name += " "; }
    if (values.middle_name) { full_name += values.middle_name += " "; }
    if (values.name_suffix) { full_name += values.name_suffix }

    const options = { ...values, full_name: full_name }
    const metadata = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options),
    }
    fetch('https://rp-contacts-manager-backend.herokuapp.com/contacts/', metadata)
      .then(res => res.json())
      .then(jsonResponse => nav(`/contacts/${jsonResponse._id}`))
      .catch((err) => console.log(err))
  };

  return (
    <div>
      <Header text="Create a new Contact" />
      <ContactForm data="" onFinish={handleSubmit} />
    </div>
  )
}

export default NewContact
