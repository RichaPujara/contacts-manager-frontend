import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllContacts from './Components/pages/AllContacts'
import Home from './Components/pages/Home';
import ContactDetails from './Components/pages/ContactDetails'
import NewContact from './Components/pages/NewContact';
import UpdateContact from './Components/pages/UpdateContact';
import { UploadVcardFile } from './Components/UploadVcardFile';
import 'semantic-ui-css/semantic.min.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<AllContacts />} />
        <Route path="/contacts/new" element={<NewContact />} />
        <Route path="/contacts/import" element={<UploadVcardFile />} />
        <Route path="/contacts/:id/update" element={<UpdateContact />} />
        <Route path="/contacts/:id" element={<ContactDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
