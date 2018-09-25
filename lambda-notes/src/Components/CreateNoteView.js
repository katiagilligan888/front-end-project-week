import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import {FormGroup, FormControl} from 'react-bootstrap'; 
import axios from 'axios'; 


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
            title: this.state.title, 
            content: this.state.content
        }
        axios.post("http://localhost:9000/api/notes", newNote).then(response => {
            this.props.history.push("/notes"); 
        }).catch(err => {
            console.log(err); 
        })
        
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
                    <button className  = "button" onClick = {this.submitNoteHandler}>Save</button>
                </FormGroup>
            </div>
        )
    }
    
}


export default CreateNoteView 