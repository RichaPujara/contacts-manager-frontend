import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header'

const ContactDetails = () => {
  const [contact, setContact] = useState("")

  const params = useParams();
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
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteButtonClick = (e) => {
    confirm('Are you sure you want to delete this contact?');
    fetch(`https://rp-contacts-manager-backend.herokuapp.com/contacts/${params.id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": " application/json"
      }
    }).then(() => {
      alert("Your contact was successfully deleted.");
      nav("/contacts")
    }).catch((err) => {
      console.log(err);
      alert("There was an error deleting message");
    });
  }
  

  const handleEditButtonClick = (e) => {
      nav( `/contacts/${params.id}/update`)
  }

  const handleClick = (e) => { 
    nav('/contacts')
  }
  return (
    <div>
      <Header text= "Contact Details" />
      <p>Name: {contact.full_name}</p>
      {contact.nickname && <p>Nickname: {contact.nickname}</p>}
      {contact.organisation && <p>Organisation: {contact.organisation}</p>}
      {contact.title && <p>Title: {contact.title}</p>}
      {contact.role && <p>Role: {contact.role}</p>}
      {contact.gender && <p>Gender: {contact.gender}</p>}
      {(contact.work_email || contact.other_email || contact.email) && <p>Email:<br></br>
      {contact.work_email && <p> Work: {contact.work_email}</p>}
      {contact.other_email && <p>Other: {contact.other_email}</p>}
        {contact.email && <p>{contact.email}</p>}
      </p>}
      {(contact.home_phone_number || contact.work_phone_number || contact.mobile_number || contact.other_phone_number) && <p>Contact Number:<br></br>
        {contact.home_phone_number && <p> Home: {contact.home_phone_number}</p>}
        {contact.work_phone_number && <p>Work: {contact.work_phone_number}</p>}
        {contact.other_phone_number && <p>Other: {contact.other_phone_number}</p>}
        {contact.mobile_number && <p>Mobile:{contact.mobile_number}</p>}
      </p>}
      {(contact.home_fax_number || contact.work_fax_number) && <p>Fax Number:<br></br>
        {contact.home_fax_number && <p> Home: {contact.home_fax_number}</p>}
        {contact.work_fax_number && <p>Work: {contact.work_fax_number}</p>}
        {contact.pager_number && <p>Pager: {contact.pager_number}</p>}
      </p>}
      {(contact.home_address || contact.work_address && contact.other_address) && <p>Address:<br></br>
        {contact.home_address && <p> Home: {contact.home_address}</p>}
        {contact.work_address && <p>Work: {contact.work_address}</p>}
        {contact.other_address && <p>Other: {contact.other_address}</p>}
      </p>}
      <button onClick={handleEditButtonClick}>Edit Contact</button>
      <button onClick={handleDeleteButtonClick}>Delete Contact</button>
      <button onClick={handleClick}>Back to All Contacts</button>
    </div>
  )
}

export default ContactDetails