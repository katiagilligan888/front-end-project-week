import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class IndividualNoteView extends Component {
  constructor() {
    super();
    this.state = {
      currentNote: [],
      showModal: false
    };
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    axios
      .get(`http://localhost:9000/api/notes/${id}`)
      .then(note => {
        this.setState({
          currentNote: note.data[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showModalHandler = () => {
    this.setState({
      showModal: true
    });
  };

  cancelDeleteHandler = () => {
    this.setState({
      showModal: false
    });
  };

  deleteNoteHandler = () => {
    const id = parseInt(this.props.match.params.id);
    axios
      .delete(`http://localhost:9000/api/notes/${id}`)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let modalShowStyle;
    if (this.state.showModal) {
      modalShowStyle = {
        display: "block"
      };
    } else {
      modalShowStyle = {
        display: "none"
      };
    }

    return (
      <div key={this.state.currentNote.id} className="note-individual">
        <div style={modalShowStyle} className="modal">
          <p> Are you sure you want to delete this? </p>
          <button onClick={this.deleteNoteHandler}> Delete</button>
          <button onClick={this.cancelDeleteHandler}> No </button>
        </div>
        <div className="buttons">
          <div className="delete-button" onClick={this.showModalHandler}>
            {" "}
            Delete{" "}
          </div>
          <Link to = {`/notes/${this.state.currentNote.id}/edit`} className="edit-button">Edit</Link>
        </div>
        <h2 className="individual-note-title">
          {this.state.currentNote.Title}
        </h2>
        <p>{this.state.currentNote.Content}</p>
      </div>
    );
  }
}

export default IndividualNoteView;
