import React, { Component } from 'react';
import SideNav from './Components/SideNav'; 
import { Route } from 'react-router-dom'; 
import NotesListView from './Components/NotesListView'; 
import CreateNoteView from './Components/CreateNoteView'; 
import IndividualNoteView from './Components/IndividualNoteView'; 
import EditNoteView from './Components/EditNoteView'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <div className = "routes">
          <Route exact path = "/" component = {NotesListView} />
          <Route path = "/new" component = {CreateNoteView} />
          <Route path = "/notes/:id/edit" component = {EditNoteView} />
          <Route exact path = "/notes/:id" component = {IndividualNoteView} />
        </div>
      </div>
    );
  }
}

export default App;
