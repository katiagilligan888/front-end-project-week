import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import {FormGroup, FormControl} from 'react-bootstrap'; 


class CreateNoteView extends Component {
    constructor(){
        super(); 
        this.state = {
            title: '', 
            content: ''
        }
    }

    handleChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitNoteHandler = (event) => {
        const newNote = {
            id: this.props.notes.length + 1, 
            title: this.state.title, 
            content: this.state.content
        }
        
        this.props.addNote(newNote); 
    }
    
    render(){
        return (
            <div className = "create-note-view">
            <FormGroup >
                <h2>Create New Note:</h2>
                <div className = "form">
                    <FormControl className = "form-data" name = 'title'  onChange = {this.handleChangeHandler} type = "text" placeholder = "Note Title"/>
                    <FormControl className  = "form-data" onChange = {this.handleChangeHandler} name = "content"  componentClass="textarea" rows = "15" placeholder = "Note Content" />
                </div>
                <Link className  = "button" onClick = {this.submitNoteHandler} to = "/">Save</Link>
                </FormGroup>
            </div>
        )
    }
    
}


export default CreateNoteView 