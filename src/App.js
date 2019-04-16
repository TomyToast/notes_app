import React, { Component } from 'react';
import NotesListElements from '../src/components/notesListElements';
import MenuPanel from '../src/components/MenuPanel';
import './App.css';

class App extends Component {

  state = {
    notesList: [],
    currentItem: {
      key: '',
      value: '',
      edit: false,
    },
    db: '',
  }

  handleAddNote = (e) => {
    e.preventDefault();
    const { notesList, currentItem } = this.state;

    const newItem = currentItem;

    notesList.push(newItem);
    const newNotesList = notesList;

    this.setState({
      notesList: newNotesList,
      currentItem: {
        key: Date.now(),
        value: e.target.value,
        edit: false,
      },
    })
  }

  handleAddNote = (e) => {
    e.preventDefault();

    this.setState({
      currentItem: {
        key: Date.now(),
        edit: false,
      }
    });

    const { notesList, currentItem } = this.state;

    const newItem = currentItem;
    notesList.push(newItem);

    this.setState({
      notesList: notesList,
      currentItem: {
        value: '',
        edit: false,
      }
    })
  }

  handleSetNote = (e) => {
    e.preventDefault();
    this.setState({
      currentItem: {
        value: e.target.value,
        edit: false,
      }
    })
  }

  handleEditNote = (ind) => {

    const { notesList } = this.state
    const { edit } = this.state.currentItem


    notesList.filter((el, elInd) => {
      if (ind === elInd){
        if ( !edit ){
          this.setState({
            currentItem: {
              edit: true,
            }
          })
        } else {
          this.setState({
            currentItem: {
              edit: false,
            }
          })
        }
        console.log(this.state);
      }
    })
    // console.log(ind);
  }


  render() {
    return (
      <div className="App">
        <MenuPanel {...this.state} addNote={this.handleAddNote} setNote={this.handleSetNote}/>
        <NotesListElements {...this.state} editNote={(ind) => this.handleEditNote(ind)}/>
      </div>
    );
  }
}

export default App;
