import React, { Component } from 'react';
import SideNav from './Components/SideNav'; 
import { Route } from 'react-router-dom'; 
import NotesListView from './Components/NotesListView'; 
import CreateNoteView from './Components/CreateNoteView'; 
import IndividualNoteView from './Components/IndividualNoteView'; 
import EditNoteView from './Components/EditNoteView'; 
import './App.css';
import WelcomeScreen from './Components/WelcomeScreen';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      loggedIn: false
    }
  }
  render() {

    //does not render SideNav component until user logs in
    let sideNavDisplay; 
    if(!this.state.loggedIn){
      sideNavDisplay = {
        display: 'none'
      }
    }
    return (
      <div className="App">
        <SideNav style = {sideNavDisplay} />
        
        <div className = "routes">
          <Route exact path = "/" component = {WelcomeScreen} />
          <div className = "with-nav" >
            <Route exact path = "/notes" component = {NotesListView} />
            <Route path = "/new" component = {CreateNoteView} />
            <Route path = "/notes/:id/edit" component = {EditNoteView} />
            <Route exact path = "/notes/:id" component = {IndividualNoteView} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
