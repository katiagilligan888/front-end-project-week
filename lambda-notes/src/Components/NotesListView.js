import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

class NotesListView extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:9000/api/notes/").then(allNotes => {
      this.setState({
        notes: allNotes.data
      });
    });
  };

  render() {
    return (
      <div className="notes-list-view">
        <h2>Your Notes:</h2>
        <div className="allNotes">
          {this.state.notes.map(note => {
            return (
              <div key={note.id} className="note">
                <Link to={`/notes/${note.id}`}>
                  <h3>{note.Title}</h3>
                  <hr />
                  <p>{note.Content}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NotesListView;
