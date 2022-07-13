import React from "react";

const ContactCard = (props) =>{
    const {id, name, email} = props.constact
        return(
            
            <div className="itme">
                <div>{id}</div>
                <div className="content">
                    {name}
                </div>
                <div>{email}</div>
                <div><i onClick={() => {props.clickHander(id)
                }} style={{color : 'red'}} className="trash alternate outline icon"></i></div>
            </div>
                )
}

export default ContactCard