import React from 'react'; 
import { Link } from 'react-router-dom'; 

const SideNav = (props) => {
    return (
        <div style = {props.style} className = "side-nav">
            <h1>Lambda Notes</h1>
            <Link to ="/notes" className = " button view-notes-button">View Your Notes</Link>
            <Link to = "/new" className = " button create-note-button"> + Create New Note</Link>
        </div>
    )
}

export default SideNav; 