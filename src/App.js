import React, { Component } from 'react';
import NotesListElements from '../src/components/notesListElements';
import MenuPanel from '../src/components/MenuPanel';
import './App.css';

class App extends Component {

  state = {
    notesList: [],
    currentItem: {
      key: '',
    },
    value: '',
  }

  handleAddNote = (e) => {
    e.preventDefault();
    const { notesList, currentItem } = this.state;

    const newItem = currentItem;

    notesList.push(newItem);
    const newNotesList = notesList;

    this.setState({
      notesList: newNotesList,
      currentItem: {key: Date.now()},
    })
  }

  handleWrite = (index, e) => {

    const { notesList } = this.state;

    const ind = notesList.findIndex( element => {
      return (notesList.indexOf(element) === index);
    })

    const item = Object.assign({}, notesList[ind]);
    item.name = e.target.value

    this.setState({value: e.target.value});
  }

  render() {
    const { notesList, value } = this.state
    return (
      <div className="App">
        <MenuPanel addNote={this.handleAddNote}/>
        <NotesListElements
          entries={notesList}
          value={value}

          handleWrite={this.handleWrite}
        />
      </div>
    );
  }
}

export default App;
