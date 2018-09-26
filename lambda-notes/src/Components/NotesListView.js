import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import SideNav from "./SideNav";
import { FormGroup, FormControl, Button } from 'react-bootstrap'; 

class NotesListView extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      searchValue: "",
      filteredNotes: []
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get("http://localhost:9000/api/notes", requestOptions)
      .then(response => {
        this.setState({
          notes: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  searchInputHandler = event => {
    this.setState({
      searchValue: event.target.value
    });
  };
  

  onSubmitHandler = () => {
    const filtered = [];
    this.state.notes.forEach(note => {
      if(note.Title.includes(this.state.searchValue) || note.Tags.includes(this.state.searchValue)) {
        filtered.push(note);
      }
    });
    this.setState({
      filteredNotes: filtered,
      searchValue: ""
    });
  };

  allNotesHandler = () => {
    this.setState({
      filteredNotes: []
    });
  };

  render() {
    return (
      <div className="notes-list-view">
        <div className="flex-app">
          <SideNav />
          <div className="content">
            <h2>Your Notes:</h2>
            <FormGroup className = "search-bar">
            <FormControl
              className = "search"
              onChange={this.searchInputHandler}
              value={this.state.searchValue}
              className="search"
              placeholder="Search Tag/Title"
            />
            <Button bsStyle="primary" onClick={this.onSubmitHandler} className="search-submit">
              Enter
            </Button>
            <Button bsStyle="primary" onClick={this.allNotesHandler} className="all-notes">
              All Notes
            </Button>
            </FormGroup>
            <div className="allNotes">
              {this.state.filteredNotes.length === 0
                ? this.state.notes.map(note => {
                    return (
                      <div key={note.id} className="note">
                        <Link to={`/notes/${note.id}`}>
                          <h3>{note.Title}</h3>
                          <p>{note.Content}</p>
                          <p className = "tags"><strong>{note.Tags}</strong></p>
                        </Link>
                      </div>
                    );
                  })
                : this.state.filteredNotes.map(note => {
                    return (
                      <div key={note.id} className="note">
                        <Link to={`/notes/${note.id}`}>
                          <h3>{note.Title}</h3>
                          <p>{note.Content}</p>
                          <p className = "tags"><strong>{note.Tags}</strong></p>
                        </Link>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesListView;
