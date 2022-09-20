import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ContactCard.css'

const ContactCard = (props) => {
  const nav = useNavigate()
  
  const handleClick = (e) => {
    nav(`/contacts/${props.contact._id}`)
  }
  return (
    
        <div className="contact-card">
          <div className="contact-card-title">
            {props.contact.full_name}
          </div>
          <div className="contact-card-details">
            <div className="contact-number">
                {props.contact.mobile_number &&
                  <p>Mobile: {props.contact.mobile_number} </p>
                }
                {props.contact.home_phone_number && !(props.contact.mobile_number) &&
                  <p>Home: {props.contact.home_phone_number}</p>
                }
            </div>
            <div className="contact-email">
              {props.contact.email &&
                <p>Email: {props.contact.email} </p>
              }
              {props.contact.work_email && !(props.contact.email) &&
                <p>Work Email: {props.contact.work_email}</p>
            }
            </div>
          </div>
      <button onClick={handleClick}><i className="eye icon"></i> More..</button>
        </div>
  )
}

export default ContactCard