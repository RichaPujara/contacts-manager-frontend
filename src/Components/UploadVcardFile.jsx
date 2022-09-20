import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UploadVcardFile = () => {
  const [vcard, setVcard] = useState()
  const nav = useNavigate()

  const handleUploadFile = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vcard: vcard })
    };
    fetch('https://rp-contacts-manager-backend.herokuapp.com/contacts/import', requestOptions)
      .then(response => response.json())
      .then(response => {
        console.log("response: ", response[0])
        nav(`/contacts/${response[0]._id}`)
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      setVcard(e.target.result);
    };
  };

  const handleClick = (e) => { 
    nav('/contacts')
  }

  return (
    <div>
      <h1>Import your contacts from vCard file</h1>
      <input type="file" id="uploadVcardFile" name="uploadVcardFile" accept='.vcf' onChange={handleChange} />
      <button type="submit" onClick={handleUploadFile}>Upload</button>
      <div>
        <button onClick={handleClick}>Back To All Contacts</button>
      </div>
    </div>
  )
}
