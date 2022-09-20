import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const UploadVcardFile = () => {
  const [vcard, setVcard] = useState()
  const nav = useNavigate()

  const handleUploadFile = (e) => {
    // Simple POST request with a JSON body using fetch
    e.preventDefault()
    console.log("vcard: ", vcard);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vcard: vcard })
    };
    fetch('https://rp-contacts-manager-backend.herokuapp.com/import', requestOptions)
      .then(response => response.json())
      .then(data => console.log("data: ", data));
  }

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      console.log("type e.target.result", typeof(e.target.result));
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
