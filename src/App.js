import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Swtich,Route } from "react-router-dom";
import Header from './header'
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from 'uuid';
uuidv4();


function App() {
  // const LOKAL_KEY = 'contacts'
  const [contacts, setContacts] = useState([])


  const addContactHandler = (contact)=>{
    setContacts([...contacts,{id : uuidv4(),...contact}])
  };


  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(()=>{
    const retriveContact = JSON.parse(localStorage.getItem('contacts')) ;
    if(retriveContact) setContacts(retriveContact)
  },[]);

  useEffect(()=>{
    localStorage.setItem('contacts',JSON.stringify(contacts));
  },[contacts]);

    return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts = {contacts} getContactId={removeContactHandler}/>
    </div>
    )

}

export default App;
