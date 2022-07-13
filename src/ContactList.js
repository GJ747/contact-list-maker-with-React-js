import React from "react";
import ContactCard from "./contactCard";

const ContactList = (props) =>{
    
const deleteContactHandler = (id)=>{
    props.getContactId(id)
}; 

    const renderContactList = props.contacts.map((contact)=>{
        return(
           <ContactCard 
           constact = {contact} 
           clickHander = {deleteContactHandler}
           key = {contact.id}
           />
            )
    })
    return(
        <div>
            {renderContactList}
        </div>
    )
}

export default ContactList